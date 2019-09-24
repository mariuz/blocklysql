Blockly.defineBlocksWithJsonArray([{
    "type": "select_json",
    "message0": " SELECT %1 %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "option",
            "options": [
                ["\u2009", "blank"],
                ["ALL", "all"],
                ["DISTINCT", "distinct"],
            ]
        },
        {
            "type": "input_value",
            "name": "select",
            "check": ['freeinput', "tablename_as", "ALL", "CONDITIONCHOOSER", "aggregate_min", "aggregate_max", "aggregate_avg", "aggregate_sum", "aggregate_count"],
        }
    ],
    "inputsInline": false,
    "previousStatement": ['SELECT', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY', 'FROM'],
    "nextStatement": 'SELECT',
    "colour": '#8007f2',
    "helpUrl": "",
    "mutator": ["multiple_line_extension"],
}])

Blockly.Extensions.registerMutator('multiple_line_extension',
  Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN, null,
  ['controls_if_elseif', 'controls_if_else']);

Blockly.JavaScript['select_json'] = function(block) {
    var select = Blockly.JavaScript.statementToCode(block, 'select');

    if(!select.includes(' *')){
        select = select.substring(0,select.length-1);
    }
    else if(select.includes(' * ')){
        select = select.substring(0,select.length-1);
    }
    if(select.includes("AS")){
        select = select + '"';
        select = select.replace(/'/g, '"');
    }
    else if(select.includes("'" || '"') && select.includes("'," || '",')){
        select = select + '"';
        select = select.replace(/'/g, '"');
    }

    var option = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('option'));
    if(option == 'blank' || option == 'all'){
        option = 'SELECT  ';
    }
    else{
        option = 'SELECT DISTINCT ';
    }

    var code = option + select;

    code = code.concat(';');
    return code;
};
