#include <Wire.h>
#define I2C_ADDRESS 0x20
#define stop_bit 0xFE
#define reset_board 250
#define servo1 70
#define servo2 71
#define servo3 72
#define servo4 73
#define header 0xFF
#define motorA_forward 3
#define motorA_backward 4
#define motorB_forward 5
#define motorB_backward 6

#define digital_write 7
#define digital_read 8
#define analog_read 9 
#define analog_write 10
#define setpin_dht 11
#define read_dht 12
#define setpin_ds18b20 13
#define read_ds18b20 14
#define set_ultrasonic 15
#define read_ultrasonic 16
#define motor_control_state 20
int present_angleS1 = 90;
int present_angleS2 = 90;
int present_angleS3 = 90;
int present_angleS4 = 90;
unsigned long time_out = 0;

int old_degree_servo[] = {0,0,0,0};

int last_value_analog = 0;

uint8_t PID_num_sensor = 0;
uint16_t sensor_pin[] = {29, 28, 27,26}; // พอตเซ็นเซอร์ที่ใช้งาน
uint16_t min_sensor_values[] = {100, 100, 100, 100}; //ค่าที่อ่านได้น้อยสุดหรือ สีดำ
uint16_t max_sensor_values[] = {1000, 1000, 1000, 1000} ; //ค่าที่อ่านได้มากสุด สีขาว

uint16_t state_on_Line = 0;
uint32_t _lastPosition;
float PID_Kp = 1;
float PID_Ki = 0;
float PID_Kd = 0;


void i2c_send(byte data)
{
  Wire1.beginTransmission(I2C_ADDRESS);
  Wire1.write(data);
  Wire1.endTransmission();
}
void i2c_send_buff(byte *data,uint8_t len_data)
{
  Wire1.beginTransmission(I2C_ADDRESS);
  Wire1.write(data,len_data);
  Wire1.endTransmission();
  Wire1.flush();
}
int i2c_request(int byte_num)
{
  int num_lenght = 0;
  int data_in[5];
  // Wire1.requestFrom(I2C_ADDRESS, byte_num);
  // int error = Wire1.endTransmission();
  // if (error != 0) {
  //   Serial.println(error);
  //   return 0;
  // }

  int n = Wire1.requestFrom(I2C_ADDRESS, byte_num);
  if (n < 1) {
  	Wire1.endTransmission();
    Serial.println("Read data error");
    return 0;
  }
  else if( n == 2){
  	data_in[0] = Wire1.read();
  	data_in[1] = Wire1.read();
  }
  	int data_value = data_in[1] * 256 + data_in[0];
	if(data_value >=0 && data_value <1024){
	     return data_value;
	  }
	  else{return 0;}

  // while (Wire1.available())
  // {
  //   data_in[num_lenght] = Wire1.read();num_lenght++;
  // }
  // int data_value = data_in[1] * 256 + data_in[0];
  // if(data_value >=0 && data_value <1024){
  //    return data_value;
  // }
  // else{return 0;}
}
void servo_write(int port_servo,int degree){
  // Serial.print(old_degree_servo[port_servo]);
  // Serial.print("..............");
  // Serial.println(degree);
  if(degree < 0)degree = 0;
  if(degree > 180)degree = 180;
  if(port_servo >=0 && port_servo <=4){
    if(old_degree_servo[port_servo] != degree)
      {
        uint8_t buff_data[4] = {header,70 +port_servo ,degree};
        i2c_send_buff(buff_data,3);
        //i2c_send(header);i2c_send(70 + port_servo);i2c_send(degree);i2c_send(stop_bit);
        //Serial.println(degree);
      }
    
  }
  old_degree_servo[port_servo] =   degree;
  //delay(40);
}

void motor_control(uint8_t state,uint8_t speed){
  uint8_t buff_data[4] = {header,motor_control_state,state,speed};
    i2c_send_buff(buff_data,4);

  //i2c_send(header);i2c_send(motor_control_state);i2c_send(state);i2c_send(speed);;
  //delay(20);
}
void motor(uint8_t ch,int speed){
  if(speed > 100)speed = 100;
  else if(speed < -100) speed = -100;
  if(ch == 1){
    if(speed > 0){
      motor_control(6,speed);
    }
    else{
      motor_control(8,speed); 
    }
  }
  else {
    if(speed > 0){
      motor_control(7,speed);
    }
    else {
      motor_control(9,speed); 
    }
  }
}
int analog_Read(uint8_t port_analog){
  int analog_data = 0;
  //   uint8_t buff_data[3] = {header,analog_read,port_analog};
  //   i2c_send_buff(buff_data,3);
  //   analog_data = (i2c_request(2));
  //   if(analog_data == 0)analog_data = last_value_analog;
  // delay(0.5);
  // last_value_analog = analog_data;
  for(int i = 0;i<5;i++){
    uint8_t buff_data[3] = {header,analog_read,port_analog};
    i2c_send_buff(buff_data,3);
    int analog_data_buffer = (i2c_request(2));
    if(analog_data_buffer == 0)analog_data += last_value_analog;
    else{analog_data += analog_data_buffer;}
    last_value_analog = analog_data_buffer;
  }
  return analog_data/5;
}
int digital_Read(uint8_t port_ditital,bool status_digital){
  int digital_data = 0;
    uint8_t buff_data[3] = {header,digital_read,port_ditital};
    i2c_send_buff(buff_data,3);
    digital_data = (i2c_request(2));
  return digital_data;
}
void digital_Write(uint8_t port_digital,bool status_digital ){
    uint8_t buff_data[4] = {header,digital_write,port_digital,status_digital};
    i2c_send_buff(buff_data,4);
    //i2c_send(header);i2c_send(digital_write);i2c_send(port_digital);i2c_send(status_digital);
}
void set_pin_ultrasonic(uint8_t Echo_pin,uint8_t Trig_pin){
  uint8_t buff_data[4] = {header,set_ultrasonic,Echo_pin,Trig_pin};
    i2c_send_buff(buff_data,4);
  //i2c_send(header);i2c_send(set_ultrasonic);i2c_send(Echo_pin);i2c_send(Trig_pin);
  delay(100);
}
int ultrasonic_Read(uint8_t Echo_pin,uint8_t Trig_pin){
    //uint8_t buff_data[4] = {header,read_ultrasonic};
  uint8_t buff_data[4] = {header,set_ultrasonic,Echo_pin,Trig_pin};
  i2c_send_buff(buff_data,4);
  //i2c_send(header);i2c_send(read_ultrasonic);
  int data_ultrasonic = (i2c_request(2));
  //Serial.println(data_ultrasonic);
  return data_ultrasonic;
}

void setup_KB_ExtenV2(){
  Wire1.begin(4, 5);
  motor_control(0,0);
  // i2c_send(header);
  // i2c_send(reset_board);
  // i2c_send(stop_bit);
  // motor(1,1,0);
  // motor(2,1,0);
  delay(100);
}
void servo_moving(uint8_t ch,uint8_t present_angle,uint8_t traget_angle,int speed_servo){
  if(present_angle > traget_angle){
    for(int i = present_angle;i>traget_angle;i-=2){
      servo_write(ch,i);delay(speed_servo);
    }
    
  }
  else if(present_angle <= traget_angle){
   for(int i = present_angle;i<traget_angle;i+=2){
      servo_write(ch,i);delay(speed_servo);
    }
  }
}
bool servo_run(int ch,int traget_angle,int speed_servo,int servo_dif){
  if(ch == 0){
    if((present_angleS1 - traget_angle) >servo_dif+1){present_angleS1 -= servo_dif;}
    else if((traget_angle - present_angleS1) >servo_dif+1){present_angleS1 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS1);delay(speed_servo);return 0;
  }
  if(ch == 1){
    if((present_angleS2 - traget_angle) >servo_dif+1){present_angleS2 -= servo_dif;}
    else if((traget_angle - present_angleS2) >servo_dif+1){present_angleS2 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS2);delay(speed_servo);return 0;
  }
  if(ch == 2){
    if((present_angleS3 - traget_angle) >servo_dif+1){present_angleS3 -= servo_dif;}
    else if((traget_angle - present_angleS3) >servo_dif+1){present_angleS3 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS3);delay(speed_servo);return 0;
  }
  if(ch == 3){
    if((present_angleS4 - traget_angle) >servo_dif+1){present_angleS4 -= servo_dif;}
    else if((traget_angle - present_angleS4) >servo_dif+1){present_angleS4 += servo_dif;}
    else{return 1;}servo_write(ch,present_angleS4);delay(speed_servo);return 0;
  }
}
void set_pin_PID(uint8_t PID_S1,uint8_t PID_S2,uint8_t PID_S3,uint8_t PID_S4){
 PID_num_sensor = 0;
 if(PID_S1 != 0 ){PID_num_sensor ++;}
 if(PID_S2 != 0 ){PID_num_sensor ++;}
 if(PID_S3 != 0 ){PID_num_sensor ++;}
 if(PID_S4 != 0 ){PID_num_sensor ++;}
 sensor_pin[0] = PID_S1;
 sensor_pin[1] = PID_S2;
 sensor_pin[2] = PID_S3;
 sensor_pin[3] = PID_S4;
}
int _read_line_PID()   
{                
  
  bool onLine = false;
  long avg = 0;
  long sum = 0;
  for (uint8_t i = 0; i < PID_num_sensor ; i++) 
  {
    long value = map(analog_Read(sensor_pin[i]), min_sensor_values[i], max_sensor_values[i], 100, 0);    
    if (value > 20) { 
      onLine = true;
    }
    if (value > 5){
      avg += (long)value * (i * 100);
      sum += value;
    }
  }
  if (!onLine)
  {
    if (_lastPosition < (((PID_num_sensor -1)*100)/2) ){
      return 0;
    }
    else{
      return ((PID_num_sensor -1)*100);
    }
  }
  _lastPosition = avg / sum;
  return _lastPosition;
}
void _Run_PID(int speed_motor_input,float kp,float ki,float kd){
  
  uint16_t setpoint;
  float present_position;
  float errors = 0;
  float output = 0;
  float integral ;
  float derivative ;
  float previous_error ;
    
    present_position = _read_line_PID() ;
    setpoint = (((PID_num_sensor -1)*100)/2) ;
    errors = setpoint - present_position;
    integral = integral + errors ;
    derivative = (errors - previous_error) ;
    output = kp * errors + ki * integral + kd * derivative;

    int max_output = speed_motor_input + 30;

    int speed_motor1 = speed_motor_input - output;
    int speed_motor2 = speed_motor_input + output;

    if(speed_motor1 > max_output ) speed_motor1 = max_output;
    else if(speed_motor1 < 0) speed_motor1 = 0;

    if(speed_motor2 > max_output ) speed_motor2 = max_output;
    else if(speed_motor2 < 0) speed_motor2 = 0;
    motor(1,speed_motor1);
    motor(2,speed_motor2);
    delay(1);
    previous_error = errors;
}
void _caribrate_Sensor_for_PID(int round){
  for(int i = 0;i<PID_num_sensor;i++){
    min_sensor_values[i] = 1023;
    max_sensor_values[i] = 0;
  }
  
  for (int i = 0; i < round; i++)
  {
    for (uint8_t i = 0; i < PID_num_sensor; i++)
    {
      if(analog_Read(sensor_pin[i]) > max_sensor_values[i]){
        max_sensor_values[i]  = analog_Read(sensor_pin[i]);
        if(max_sensor_values[i] > 1023 )max_sensor_values[i] = 1023;
      }
      if(analog_Read(sensor_pin[i]) < min_sensor_values[i]){
        min_sensor_values[i] = analog_Read(sensor_pin[i]);
        if(min_sensor_values[i] < 0) min_sensor_values[i] = 0;
      }
      
    } 
  }
}
