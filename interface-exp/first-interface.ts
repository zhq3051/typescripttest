interface LabelledValue {
    label: string;
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

let myObj = {Size: 10, label: "Size of object"};

printLabel(myObj);