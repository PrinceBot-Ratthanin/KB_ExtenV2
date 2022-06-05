module.exports = [
    {
        name: "KB_ExtenV2",
        blocks: [
            {
              xml: `<sep gap="32"></sep><label text="KB_ExtenV2 Setup ตั้งค่า " web-class="headline"></label>`
            },
            'KB_ExtenV2_setup',
            'KB_ExtenV2_Wait',
            // 'KB_ExtenV2_set_ultrasonic',
            // 'KB_ExtenV2_set_ds18b20',
            // 'KB_ExtenV2_set_dht',
            {
              xml: `<sep gap="32"></sep><label text="Sensor เซนเซอร์ " web-class="headline"></label>`
            },
            'KB_ExtenV2_digital_Write',
            'KB_ExtenV2_analog',
            'KB_ExtenV2_digital_Read',
            
            {
                    xml : 
                    `<block type="KB_ExtenV2_PID_Caribrate_sensor">
                        <value name="Round">
                            <shadow type="math_number">
                                <field name="NUM">200</field>
                            </shadow>
                        </value>
                    </block>`
            },
            'KB_ExtenV2_ReadLine',
            'KB_ExtenV2_set_PID',
            {
                xml : 
                `<block type="KB_ExtenV2_set_min_PID">
                    <value name="Min_S1">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="Min_S2">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="Min_S3">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="Min_S4">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml : 
                `<block type="KB_ExtenV2_set_max_PID">
                    <value name="Max_S1">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                    <value name="Max_S2">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                    <value name="Max_S3">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                    <value name="Max_S4">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml : 
                `<block type="KB_ExtenV2_Run_PID">
                    <value name="Speed">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                    <value name="KP">
                        <shadow type="math_number">
                            <field name="NUM">0.5</field>
                        </shadow>
                    </value>
                    <value name="KI">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="KD">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>`
            },
            // {
            //   xml: `<sep gap="32"></sep><label text="ตั้งค่า pin ก่อนใช้งาน" web-class="headline"></label>`
            // },
            // 'KB_ExtenV2_read_ultrasonic',
            // 'KB_ExtenV2_read_ds18b20',
            // 'KB_ExtenV2_read_dht',
            {
              xml: `<sep gap="32"></sep><label text="Motor มอเตอร์" web-class="headline"></label>`
            },
            {
                    xml : 
                    `<block type="KB_ExtenV2_Servo_motor">
                        <value name="degree">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
            {
                    xml : 
                    `<block type="KB_ExtenV2_motor_stop_ch">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_motor_move">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_motor_forward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_motor_backward">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_motor_turn">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_motor_spin">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                // {
                //     xml : 
                //     `<block type="KB_ExtenV2_motor">
                //         <value name="speed">
                //             <shadow type="math_number">
                //                 <field name="NUM">50</field>
                //             </shadow>
                //         </value>
                //     </block>`
                // },
                {
                    xml : 
                    `<block type="KB_ExtenV2_Servo_motor_Moving">
                        <value name="present_angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                        <value name="traget_angle">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="speed_servo">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="KB_ExtenV2_Servo_run">
                        <value name="traget_angle">
                            <shadow type="math_number">
                                <field name="NUM">120</field>
                            </shadow>
                        </value>
                        <value name="speed_servo">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="servo_dif">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                    </block>`
                },


        ]
    }
];