Blockly.defineBlocksWithJsonArray([
    {
        "type": "aggregate_min",
        "message0": "MIN %1",
        "args0": [
            {
                "type": "input_value",
                "name": "min",
                "check": ["CONDITIONCHOOSER", 'freeinput']
            },
        ],
        "inputsInline": true,
        "output": 'aggregate_min',
        "colour": '#C440C4',
        "tooltip": "",
        "helpUrl": "",
        "extensions": 'aggregate_Extensions'
    },
    {
        "type": "aggregate_avg",
        "message0": "AVG %1",
        "args0": [
            {
                "type": "input_value",
                "name": "avg",
                "check": ["CONDITIONCHOOSER", 'freeinput']
            }
        ],
        "inputsInline": true,
        "output": 'aggregate_avg',
        "colour": '#C440C4',
        "tooltip": "",
        "helpUrl": "",
        "extensions": 'aggregate_Extensions'
    },
    {
        "type": "aggregate_max",
        "message0": "MAX %1",
        "args0": [
            {
                "type": "input_value",
                "name": "max",
                "check": ["CONDITIONCHOOSER", 'freeinput']
            }
        ],
        "inputsInline": true,
        "output": 'aggregate_max',
        "colour": '#C440C4',
        "tooltip": "",
        "helpUrl": "",
        "extensions": 'aggregate_Extensions'
    },
    {
        "type": "aggregate_sum",
        "message0": "SUM %1",
        "args0": [
            {
                "type": "input_value",
                "name": "sum",
                "check": ["CONDITIONCHOOSER", 'freeinput', 'MATH']
            }
        ],
        "inputsInline": true,
        "output": 'aggregate_sum',
        "colour": '#C440C4',
        "tooltip": "",
        "helpUrl": "",
        "extensions": 'aggregate_Extensions'
    },
    {
        "type": "aggregate_count",
        "message0": "COUNT %1",
        "args0": [
            {
                "type": "input_value",
                "name": "count",
                "check": ["CONDITIONCHOOSER", 'freeinput']
            }
        ],
        "inputsInline": true,
        "output": 'aggregate_count',
        "colour": '#C440C4',
        "tooltip": "",
        "helpUrl": "",
        "extensions": 'aggregate_Extensions'
    }
]);

Blockly.Extensions.register('aggregate_Extensions', function(){
    this.setOnChange(function(changeEvent){
        var parent = this.getSurroundParent();
        if(parent != null && parent.toString().includes('ORDER BY') && (this.getField('orderA') == null)){
            this.appendDummyInput('listOrder').appendField(" ").appendField(new Blockly.FieldDropdown([["\u2009","BLANK"], ["ASC","ASC"], ["DESC","DESC"]]), "orderA")
        }
        else if((parent == null || (!(parent.toString().includes('ORDER BY')))) && this.getField('orderA') != null){
            this.removeInput('listOrder');
        }
    })
});
Blockly.JavaScript['aggregate_min'] = function(block) {
    var argument = Blockly.JavaScript.statementToCode(block, 'min');
    argument = argument.substring(0, argument.length);
    argument = argument.trim();
    var code = 'MIN(';
    if(argument.includes(',')){
        argument = argument.replace(',', '),');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', AVG')){
        argument = argument.replace(', AVG', ') AVG');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', SUM')){
        argument = argument.replace(', SUM', ') SUM');
        code = code.concat(argument);
    }
    else if(argument.includes(', COUNT')){
        argument = argument.replace(', COUNT', ') COUNT');
        code = code.concat(argument);
    }
    else{
        code = 'MIN(' + argument + ') ';
    }

    //parent is ORDER BY?!:
    var chosenOrderA = '';
    if(this.getInput('listOrder')){
        chosenOrderA = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderA'));
        if(chosenOrderA == 'BLANK'){
            chosenOrderA = '';
        }
        code = code.concat(' ' + chosenOrderA);
    }
    return code;
};

Blockly.JavaScript['aggregate_avg'] = function(block) {
    var argument = Blockly.JavaScript.statementToCode(block, 'avg');
    argument = argument.substring(0, argument.length);
    argument = argument.trim();
    var code = 'AVG(';
    if(argument.includes(',')){
        argument = argument.replace(',', '),');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', MIN')){
        argument = argument.replace(', MIN', ') MIN');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', SUM')){
        argument = argument.replace(', SUM', ') SUM');
        code = code.concat(argument);
    }
    else if(argument.includes(', COUNT')){
        argument = argument.replace(', COUNT', ') COUNT');
        code = code.concat(argument);
    }
    else{
        code = 'AVG(' + argument + ') ';
    }

    var chosenOrderA = '';
    if(this.getInput('listOrder')){
        chosenOrderA = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderA'));
        if(chosenOrderA == 'BLANK'){
            chosenOrderA = '';
        }
        code = code.concat(' ' + chosenOrderA);
    }
    return code;
};

Blockly.JavaScript['aggregate_max'] = function(block) {
    var argument = Blockly.JavaScript.statementToCode(block, 'max');
    argument = argument.substring(0, argument.length);
    argument = argument.trim();
    var code = 'MAX(';
    if(argument.includes(',')){
        argument = argument.replace(',', '),');
        code = code.concat(argument);
    }
    else if(argument.includes(', MIN')){
        argument = argument.replace(', MIN', ') MIN');
        code = code.concat(argument);
    }
    else if(argument.includes(', AVG')){
        argument = argument.replace(', AVG', ') AVG');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', SUM')){
        argument = argument.replace(', SUM', ') SUM');
        code = code.concat(argument);
    }
    else if(argument.includes(', COUNT')){
        argument = argument.replace(', COUNT', ') COUNT');
        code = code.concat(argument);
    }
    else{
        code = 'MAX(' + argument + ') ';
    }

    var chosenOrderA = '';
    if(this.getInput('listOrder')){
        chosenOrderA = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderA'));
        if(chosenOrderA == 'BLANK'){
            chosenOrderA = '';
        }
        code = code.concat(' ' + chosenOrderA);
    }
    return code;
};

Blockly.JavaScript['aggregate_sum'] = function(block) {
    var argument = Blockly.JavaScript.statementToCode(block, 'sum');
    argument = argument.substring(0, argument.length);
    argument = argument.trim();
    var code = 'SUM(';
    if(argument.includes(',')){
        argument = argument.replace(',', '),');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', AVG')){
        argument = argument.replace(', AVG', ') AVG');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', MIN')){
        argument = argument.replace(', MIN', ') MIN');
        code = code.concat(argument);
    }
    else if(argument.includes(', COUNT')){
        argument = argument.replace(', COUNT', ') COUNT');
        code = code.concat(argument);
    }
    else{
        code = 'SUM(' + argument + ') ';
    }

    var chosenOrderA = '';
    if(this.getInput('listOrder')){
        chosenOrderA = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderA'));
        if(chosenOrderA == 'BLANK'){
            chosenOrderA = '';
        }
        code = code.concat(' ' + chosenOrderA);
    }
    return code;
};

Blockly.JavaScript['aggregate_count'] = function(block) {
    var argument = Blockly.JavaScript.statementToCode(block, 'count');
    argument = argument.substring(0, argument.length);
    argument = argument.trim();
    var code = 'COUNT(';
    if(argument.includes(',')){
        argument = argument.replace(',', '),');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', AVG')){
        argument = argument.replace(', AVG', ') AVG');
        code = code.concat(argument);
    }
    else if(argument.includes(', MAX')){
        argument = argument.replace(', MAX', ') MAX');
        code = code.concat(argument);
    }
    else if(argument.includes(', SUM')){
        argument = argument.replace(', SUM', ') SUM');
        code = code.concat(argument);
    }
    else if(argument.includes(', MIN')){
        argument = argument.replace(', MIN', ') MIN');
        code = code.concat(argument);
    }
    else{
        code = 'COUNT(' + argument + ') ';
    }

    var chosenOrderA = '';
    if(this.getInput('listOrder')){
        chosenOrderA = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderA'));
        if(chosenOrderA == 'BLANK'){
            chosenOrderA = '';
        }
        code = code.concat(' ' + chosenOrderA);
    }
    return code;
};
