'use client';
import { useState } from 'react';

interface DroppedElementProps {
    type: string;
    value?: string;
    placeholder?: string;
    id: number;
    labelFor?: string;
}

export default function Source() {
  const [droppedElements, setDroppedElements] = useState<DroppedElementProps[]>([

    {
        type: 'input',
        id: Date.now()+1,
    },
    {
        type: 'textarea',
        id: Date.now()+2,
    },
    {
        type: 'checkbox',
        labelFor: 'Label 1',
        id: 1,
    },
  ]);

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
      <h1>Source Form</h1>
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
                    className="slot"
                  >
                    <input
                        type="text"
                        defaultValue={element.value}
                        placeholder={element.placeholder}
                        style={{
                          width: '480px',
                          border: '1px solid #ddd',
                          padding: '10px',
                          outline: 'none',
                        }}
                    />
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
                    className="slot"
                  >
                    <textarea
                      defaultValue={element.value}
                      placeholder={element.placeholder}
                      style={{
                        width: '480px',
                        height: '100px',
                        border: '1px solid #ddd',
                        padding: '10px',
                        outline: 'none',
                      }}
                    />
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
                    className="slot"
                  >
                    <input type="checkbox" id={`checkbox-${element.id}`} />
                    <label
                      htmlFor={`checkbox-${element.id}`}
                      style={{ marginLeft: '5px' }}
                    >
                      {element.labelFor}
                    </label>
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
