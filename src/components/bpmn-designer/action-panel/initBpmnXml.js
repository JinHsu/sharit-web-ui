function randomStr() {
    return Math.random().toString(36).slice(-8)
}

export default function () {
    return `<?xml version="1.0" encoding="UTF-8"?>
            <definitions 
            xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
            xmlns:activiti="http://activiti.org/bpmn" 
            xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
            xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" 
            xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" 
            typeLanguage="http://www.w3.org/2001/XMLSchema" 
            expressionLanguage="http://www.w3.org/1999/XPath" 
            targetNamespace="http://www.activiti.org/processdef">
                <process id="process_${randomStr()}" name="name_${randomStr()}" isExecutable="true">
                </process>
                <bpmndi:BPMNDiagram id="BPMNDiagram_${randomStr()}">
                    <bpmndi:BPMNPlane id="BPMNPlane_${randomStr()}" bpmnElement="${randomStr()}">
                    </bpmndi:BPMNPlane>
                </bpmndi:BPMNDiagram>
            </definitions>`
}
