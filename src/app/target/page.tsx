'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import CheckBox from '@/components/CheckBox';

interface DroppedElementProps {
    type: string;
    value?: string;
    placeholder?: string;
    id: number;
    labelFor?: string;
}

export default function Target() {
  const [droppedElements, setDroppedElements] = useState<DroppedElementProps[]>([]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const elementData = event.dataTransfer.getData('application/json');
    const elementAttributes = JSON.parse(elementData);
    setDroppedElements((prev) => [
      ...prev,
      { ...elementAttributes, id: Date.now() },
    ]);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, element: DroppedElementProps) => {
    const updatedElement = {
      ...element,
      value: (document.getElementById(`element-${element.id}`) as HTMLInputElement | HTMLTextAreaElement)?.value,
    };
    const data = JSON.stringify(updatedElement);
    event.dataTransfer.setData('application/json', data);
  };

  const handleDragEnd = (element: any) => {
    setDroppedElements((prev) => prev.filter((el) => el.id !== element.id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Target Form</h1>
      <form>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            width: '600px',
            minHeight: '200px',
            border: '2px dashed gray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '10px',
          }}
        >
          {droppedElements.length > 0 ? (
            droppedElements.map((element) => {
              if (element.type === 'input') {
                return (
                  <div
                    key={element.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, element)}
                    onDragEnd={() => handleDragEnd(element)}
                    style={{
                        width: '500px',
                        padding: '10px',
                        margin: '2px 0',
                        border: '1px solid lightgray',
                        cursor: 'grab',
                    }}
                  >
                    <Input type='text' value={element.value} placeholder={element.placeholder}/>
                  </div>
                );
              } else if (element.type === 'textarea') {
                return (
                  <div
                    key={element.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, element)}
                    onDragEnd={() => handleDragEnd(element)}
                    style={{
                      width: '500px',
                      padding: '10px',
                      margin: '5px 0',
                      border: '1px solid lightgray',
                      cursor: 'grab',
                    }}
                  >
                    <TextArea value={element.value} placeholder={element.placeholder} />
                  </div>
                );
              } else if (element.type === 'checkbox') {
                return (
                  <div
                    key={element.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, element)}
                    onDragEnd={() => handleDragEnd(element)}
                    style={{
                      width: '500px',
                      padding: '10px',
                      margin: '5px 0',
                      border: '1px solid lightgray',
                      cursor: 'grab',
                    }}
                  >
                    <CheckBox id={element.id} labelFor={element.labelFor}/>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <p>Drop your elements here</p>
          )}
        </div>
      </form>
    </div>
  );
}
