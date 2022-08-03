Blockly.Blocks['KB_ExtenV2_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup KB_ExtenV2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_Wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait until SW1 Press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_Servo_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("ExtenV2-set servo:")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("degree")
      .setCheck("Number")
      .appendField("at");
    this.appendDummyInput()
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("ExtenV2-set motor")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor2CH'] = {
  init: function() {
    this.appendValueInput("speedA")
      .setCheck("Number")
      .appendField("MotorA at speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("speedB")
      .setCheck("Number")
      .appendField("MotorB at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_move'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Move")
      .appendField(new Blockly.FieldDropdown([["Forward","0"],
                                              ["Backward","1"],
                                              ["TurnLeft","2"],
                                              ["TurnRight","3"],
                                              ["SpinLeft","4"],
                                              ["SpinRight","5"],
                                              ["MotorA","6"],
                                              ["MotorB","7"]]), "direction");
    
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("at speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("delay")
      .setCheck("Number")
      .appendField("Time:");
    this.appendDummyInput()
      .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Forward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Move Backward at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Turn :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_spin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor Spin :")
      .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","2"]]), "direction");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop Moving Ch")
      .appendField(new Blockly.FieldDropdown([["ALL","0"],["1","1"], ["2","2"]]), "ch")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ExtenV2-analog Read ")
        .appendField(new Blockly.FieldDropdown([
                                            ["A1", "29"],
                                            ["A2", "28"],
                                            ["A3", "27"],
                                            ["A4", "26"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_ExtenV2_digital_Read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ExtenV2-digital Read")
        .appendField(new Blockly.FieldDropdown([
                                            ["D1", "29"],
                                            ["D2", "28"],
                                            ["D3", "27"],
                                            ["D4", "26"],
                                            ["D5", "25"],
                                            ["D6", "24"]]), "pin");
    this.appendDummyInput()
      .appendField("mode:")
      .appendField(new Blockly.FieldDropdown([["INPUT","0"],["INPUT_PULLUP","1"]]), "mode");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['KB_ExtenV2_digital_Write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ExtenV2-digital Write ")
        .appendField(new Blockly.FieldDropdown([
                                            ["D1", "29"],
                                            ["D2", "28"],
                                            ["D3", "27"],
                                            ["D4", "26"],
                                            ["D5", "25"],
                                            ["D6", "24"]]), "pin");
    this.appendDummyInput()
      .appendField("status")
      .appendField(new Blockly.FieldDropdown([["ON","1"],["OFF","0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_set_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Ultrasonic Echo:")
        .appendField(new Blockly.FieldDropdown([
                                            ["D1", "29"],
                                            ["D2", "28"],
                                            ["D3", "27"],
                                            ["D4", "26"],
                                            ["D5", "25"],
                                            ["D6", "24"]]), "pin_echo");
    this.appendDummyInput()
      .appendField("Trig:")
      .appendField(new Blockly.FieldDropdown([
                                            ["D1", "29"],
                                            ["D2", "28"],
                                            ["D3", "27"],
                                            ["D4", "26"],
                                            ["D5", "25"],
                                            ["D6", "24"]]), "pin_trig");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_read_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read ultrasonic")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['KB_ExtenV2_Servo_motor_Moving'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set servo:")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("present_angle")
      .setCheck("Number")
      .appendField("from angle");
    this.appendValueInput("traget_angle")
      .setCheck("Number")
      .appendField("To");
    this.appendValueInput("speed_servo")
      .setCheck("Number")
      .appendField("speed:");
    this.appendDummyInput()
      .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_Servo_run'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set")
      .appendField(new Blockly.FieldDropdown([["D10","0"], ["D11","1"], ["D12","2"], ["D13","3"]]), "port");
    this.appendValueInput("traget_angle")
      .setCheck("Number")
      .appendField("Servo move by step to:");
    this.appendValueInput("speed_servo")
      .setCheck("Number")
      .appendField("speed:");
    this.appendValueInput("servo_dif")
      .setCheck("Number")
      .appendField("% dif:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_set_PID'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Set pin PID S1:")
      .appendField(new Blockly.FieldDropdown([["-","0"], ["A1","29"], ["A2","28"], ["A3","27"], ["A4","26"]]), "PID_S1");
    this.appendDummyInput()
      .appendField("S2:")
      .appendField(new Blockly.FieldDropdown([["-","0"], ["A1","29"], ["A2","28"], ["A3","27"], ["A4","26"]]), "PID_S2");
    this.appendDummyInput()
      .appendField("S3:")
      .appendField(new Blockly.FieldDropdown([["-","0"], ["A1","29"], ["A2","28"], ["A3","27"], ["A4","26"]]), "PID_S3");
    this.appendDummyInput()
      .appendField("S4:")
      .appendField(new Blockly.FieldDropdown([["-","0"], ["A1","29"], ["A2","28"], ["A3","27"], ["A4","26"]]), "PID_S4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_set_min_PID'] = {
  init: function() {
    this.appendValueInput("Min_S1")
      .setCheck("Number")
      .appendField("Set Min value S1:");
    this.appendValueInput("Min_S2")
      .setCheck("Number")
      .appendField("S2:");
    this.appendValueInput("Min_S3")
      .setCheck("Number")
      .appendField("S3:");
    this.appendValueInput("Min_S4")
      .setCheck("Number")
      .appendField("S4:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_set_max_PID'] = {
  init: function() {
    this.appendValueInput("Max_S1")
      .setCheck("Number")
      .appendField("Set Max value S1:");
    this.appendValueInput("Max_S2")
      .setCheck("Number")
      .appendField("S2:");
    this.appendValueInput("Max_S3")
      .setCheck("Number")
      .appendField("S3:");
    this.appendValueInput("Max_S4")
      .setCheck("Number")
      .appendField("S4:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_PID_Caribrate_sensor'] = {
  init: function() {
    
    this.appendValueInput("Round")
      .setCheck("Number")
      .appendField("Caribrate sensor for");
    this.appendDummyInput()
      .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_ReadLine'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("ReadLine");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
Blockly.Blocks['KB_ExtenV2_Run_PID'] = {
  init: function() {
    this.appendValueInput("Speed")
      .setCheck("Number")
      .appendField("Follow line at speed:");
    this.appendValueInput("KP")
      .setCheck("Number")
      .appendField("KP:");
    this.appendValueInput("KI")
      .setCheck("Number")
      .appendField("KI:");
    this.appendValueInput("KD")
      .setCheck("Number")
      .appendField("KD:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c7882a");
    this.setTooltip("");
  }
};
