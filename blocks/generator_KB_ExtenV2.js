Blockly.JavaScript['KB_ExtenV2_setup'] = function (block) {
	var code = '';
	code += '#EXTINC#include <KB_ExtenV2.h>#END\n';
	code += '\n';
	code += 'setup_KB_ExtenV2();\n';
  // code += 'matrix.drawBitmap(0, 0, (uint8_t *)"\\x81\\xef\\x85\\x0\\xe0\\xe\\x31\\x62\\xa1\\x6e\\x30\\xe8\\x1b\\x2d\\x11\\xe0\");';
  // code += 'while(digitalRead(16)==1);\n';
    return code;
};
Blockly.JavaScript['KB_ExtenV2_Wait'] = function (block) {
  var code = '';
  
  // code += 'matrix.drawBitmap(0, 0, (uint8_t *)"\\x81\\xef\\x85\\x0\\xe0\\xe\\x31\\x62\\xa1\\x6e\\x30\\xe8\\x1b\\x2d\\x11\\xe0\");';
  code += 'while(digitalRead(16)==1){ matrix.scrollText(String(String("Wait SW1 Press")));}\n';
    return code;
};
Blockly.JavaScript['KB_ExtenV2_Servo_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_write(' + dropdown_ch + ', ' + value_degree +');\n';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  //var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
   var code = '';
  if(dropdown_ch == '1'){
    if(dropdown_dir == '1'){
      code += `motor_control(6, ${value_speed} );\n`;
    }
    else if(dropdown_dir == '2'){
      code += 'motor_control(8, ' + value_speed + ');\n';
    }
  }
  if(dropdown_ch == '2'){
    if(dropdown_dir == '1'){
      code += `motor_control(7, ${value_speed} );\n`;
    }
    else if(dropdown_dir == '2'){
      code += 'motor_control(9, ' + value_speed + ');\n';
    }
  }
  
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor2CH'] = function(block) {
  var value_speedA = Blockly.JavaScript.valueToCode(block, 'speedA', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speedB = Blockly.JavaScript.valueToCode(block, 'speedB', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  let resultA = value_speedA.substring(0, 1);
  let resultB = value_speedB.substring(0, 1);
  //var code = 'motor(' + resultA + ', ' + value_speedB + ');\n';
  var code = '';
  if(resultA == '('){
    code += `motor_control(8, ${value_speedA.split(")")} );\n`;
  }
  else if(resultA != '('){
    code += 'motor_control(6, ' + value_speedA + ');\n';
  }

  if(resultB == '('){
    code += 'motor_control(9, ' + value_speedB + ');\n';
  }
  else if(resultB != '('){
    code += 'motor_control(7, ' + value_speedB + ');\n';
  }
  //var code = `${resultA}+++${resultB}`;
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor_move'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'motor_control(' + dropdown_ch + ',' + value_speed + ');\t';
  code += `delay(`+value_delay+`);\n`;
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  //code += 'motor(2, 1, ' + value_speed + ');\n';
  //code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor_control(0,' + value_speed + ');\t';
  
  return code;
};

Blockly.JavaScript['KB_ExtenV2_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  // code += 'motor(1, 2, ' + value_speed + ');\t';
  // code += 'motor(2, 2, ' + value_speed + ');\n';
  code += 'motor_control(1,' + value_speed + ');\t';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor_spin'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    // code += 'motor(1, 2, ' + value_speed + ');\t';
    // code += 'motor(2, 1, ' + value_speed + ');\n';
    code += 'motor_control(4,' + value_speed + ');\t';
  }
  else if(dropdown_ch == 2){
    // code += 'motor(1, 1, ' + value_speed + ');\t';
    // code += 'motor(2, 2, ' + value_speed + ');\n';
    code += 'motor_control(5,' + value_speed + ');\t';
  }
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor_turn'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    // code += 'motor(1, 2, 1);\t';
    // code += 'motor(2, 1, ' + value_speed + ');\n';
    code += 'motor_control(2,' + value_speed + ');\t';
  }
  else if(dropdown_ch == 2){
    // code += 'motor(1, 1, ' + value_speed + ');\t';
    // code += 'motor(2, 2, 1);\n';
    code += 'motor_control(3,' + value_speed + ');\t';
  }
  return code;
};
Blockly.JavaScript['KB_ExtenV2_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = '';
  if(dropdown_ch == 0){
    code += 'motor_control(1,0);\n';
  }
  else if(dropdown_ch == 1){
    code = 'motor_control(6,0);\n';
  }
  else if(dropdown_ch == 2){
    code = 'motor_control(7,0);\n';
  }
  
  return code;
};
Blockly.JavaScript['KB_ExtenV2_analog'] = function(block) {
    var value_pin = block.getFieldValue('pin');
    var code = `analog_Read(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_digital_Read'] = function(block) {
    var value_pin = block.getFieldValue('pin');
    var value_mode = block.getFieldValue('mode');
    var code = `digital_Read(${value_pin},${value_mode})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_digital_Write'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_status = block.getFieldValue('status');
  var code = 'digital_Write(' + dropdown_pin + ', ' + dropdown_status +');\n';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_set_ultrasonic'] = function(block) {
  var dropdown_pin_echo = block.getFieldValue('pin_echo');
  var dropdown_pin_trig = block.getFieldValue('pin_trig');
  var code = `ultrasonic_Read(${dropdown_pin_echo},${dropdown_pin_trig})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // var code = 'set_pin_ultrasonic(' + dropdown_pin_echo + ', ' + dropdown_pin_trig +');\n';
  // return code;
};
Blockly.JavaScript['KB_ExtenV2_read_ultrasonic'] = function(block) {

    var code = `ultrasonic_Read()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_set_ds18b20'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'set_pin_ds18b20(' + dropdown_pin +');\n';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_read_ds18b20'] = function(block) {
    var code = `ds18b20_Read()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_set_dht'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');
  var code = 'set_pin_dht(' + dropdown_pin +','+dropdown_type+');\n';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_read_dht'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
    var code = 'dht_Read('+dropdown_type+')\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_Servo_motor_Moving'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_present_angle = Blockly.JavaScript.valueToCode(block, 'present_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_moving(' + dropdown_ch + ', ' + value_present_angle +', ' + value_traget_angle +', ' + value_speed_servo +');\n';
  return code;
};
Blockly.JavaScript['KB_ExtenV2_Servo_run'] = function(block) {
  var dropdown_ch = block.getFieldValue('port');
  var value_traget_angle = Blockly.JavaScript.valueToCode(block, 'traget_angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_speed_servo = Blockly.JavaScript.valueToCode(block, 'speed_servo', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_servo_dif = Blockly.JavaScript.valueToCode(block, 'servo_dif', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo_run(' + dropdown_ch + ',' + value_traget_angle +', ' + value_speed_servo +', ' + value_servo_dif +')\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_set_PID'] = function(block) {
  var dropdown_S1 = block.getFieldValue('PID_S1');
  var dropdown_S2 = block.getFieldValue('PID_S2');
  var dropdown_S3 = block.getFieldValue('PID_S3');
  var dropdown_S4 = block.getFieldValue('PID_S4');
  var code = `set_pin_PID(${dropdown_S1},${dropdown_S2},${dropdown_S3},${dropdown_S4});\n`;
  
  return code;
};
Blockly.JavaScript['KB_ExtenV2_set_min_PID'] = function(block) {
  var value_S1 = Blockly.JavaScript.valueToCode(block, 'Min_S1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S2 = Blockly.JavaScript.valueToCode(block, 'Min_S2', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S3 = Blockly.JavaScript.valueToCode(block, 'Min_S3', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S4 = Blockly.JavaScript.valueToCode(block, 'Min_S4', Blockly.JavaScript.ORDER_ATOMIC) || 0;

  var code = `min_sensor_values[0] = ${value_S1};\n`;
  code += `min_sensor_values[1] = ${value_S2};\n`;
  code += `min_sensor_values[2] = ${value_S3};\n`;
  code += `min_sensor_values[3] = ${value_S4};\n`;

  return code;
};
Blockly.JavaScript['KB_ExtenV2_set_max_PID'] = function(block) {
  var value_S1 = Blockly.JavaScript.valueToCode(block, 'Max_S1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S2 = Blockly.JavaScript.valueToCode(block, 'Max_S1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S3 = Blockly.JavaScript.valueToCode(block, 'Max_S1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_S4 = Blockly.JavaScript.valueToCode(block, 'Max_S1', Blockly.JavaScript.ORDER_ATOMIC) || 0;

  var code = `max_sensor_values[0] = ${value_S1};\n`;
  code += `max_sensor_values[1] = ${value_S2};\n`;
  code += `max_sensor_values[2] = ${value_S3};\n`;
  code += `max_sensor_values[3] = ${value_S4};\n`;

  return code;
};
Blockly.JavaScript['KB_ExtenV2_ReadLine'] = function(block) {
    var code = '_read_line_PID()\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['KB_ExtenV2_Run_PID'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'Speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_KP = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_KI = Blockly.JavaScript.valueToCode(block, 'KI', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_KD = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC) || 0;

  var code = `_Run_PID(${value_speed},${value_KP},${value_KI},${value_KD});\n`;

  return code;
};
Blockly.JavaScript['KB_ExtenV2_PID_Caribrate_sensor'] = function(block) {
  var value_Round = Blockly.JavaScript.valueToCode(block, 'Round', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code =`matrix.printText(0, 0,"CRB");\n`;
     code += `_caribrate_Sensor_for_PID(${value_Round});\n`;
     code +=`matrix.printText(0, 0,"Go");\n`;

    return code;
};