import React, { useEffect } from 'react';

const ProjectTimeline = () => {
    useEffect(() => {
        const stages = document.querySelectorAll('.stage');
        stages.forEach(stage => {
            stage.addEventListener('click', function() {
                if (this.classList.contains('completed')) {
                    // displayTasks(this.id);
                    highlightStages(this);
                } else {
                    // displayUnfinishedTasks(this.id);
                }
            });
        });

        function displayTasks(stageId) {
            const tasks = {
                initiate: ['Task 1', 'Task 2', 'Task 3'],
                mobilise: ['Task 4', 'Task 5'],
                feasibility: ['Task 6'],
                authority: ['Task 7', 'Task 8'],
                'developed-design': ['Task 9', 'Task 10', 'Task 11'],
                procurement: ['Task 12'],
                'technical-design': ['Task 13', 'Task 14'],
                construct: ['Task 15'],
                commission: ['Task 16', 'Task 17']
            };
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '<h2>Completed Tasks</h2>';
            const tasksForStage = tasks[stageId];
            if (tasksForStage && tasksForStage.length > 0) {
                const ul = document.createElement('ul');
                tasksForStage.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task;
                    ul.appendChild(li);
                });
                taskList.appendChild(ul);
            } else {
                taskList.innerHTML = '<p>No tasks completed for this stage.</p>';
            }
        }

        function displayUnfinishedTasks(stageId) {
            const tasks = {
                initiate: ['Task 1', 'Task 2', 'Task 3'],
                mobilise: ['Task 4', 'Task 5'],
                feasibility: ['Task 6'],
                authority: ['Task 7', 'Task 8'],
                'developed-design': ['Task 9', 'Task 10', 'Task 11'],
                procurement: ['Task 12'],
                'technical-design': ['Task 13', 'Task 14'],
                construct: ['Task 15'],
                commission: ['Task 16', 'Task 17']
            };
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '<h2>Unfinished Tasks</h2>';
            const tasksForStage = tasks[stageId];
            if (tasksForStage && tasksForStage.length > 0) {
                const ul = document.createElement('ul');
                tasksForStage.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task;
                    ul.appendChild(li);
                });
                taskList.appendChild(ul);
            } else {
                taskList.innerHTML = '<p>No tasks available for this stage.</p>';
            }
        }

        function highlightStages(clickedStage) {
            const stages = document.querySelectorAll('.stage');
            let foundClicked = false;
            stages.forEach(stage => {
                if (stage === clickedStage) {
                    foundClicked = true;
                }
                if (foundClicked && stage.classList.contains('completed')) {
                    stage.classList.add('highlight');
                } else {
                    stage.classList.remove('highlight');
                }
            });
        }
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '90%', margin: '20px auto' }}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="timeline">
                    {[
                        { id: 'initiate', name: 'Initiate', completed: true },
                        { id: 'mobilise', name: 'Mobilise', completed: true, customColor: '#a0d468' },
                        { id: 'feasibility', name: 'Feasibility', completed: false },
                        { id: 'authority', name: 'Authority to Proceed', completed: false },
                        { id: 'developed-design', name: 'Developed Design', completed: false },
                        { id: 'procurement', name: 'Procurement and Contracting', completed: false },
                        { id: 'technical-design', name: 'Technical Design', completed: false },
                        { id: 'construct', name: 'Construct', completed: false },
                        { id: 'commission', name: 'Commission and Close', completed: false }
                    ].map(stage => (
                        <div style={{ position: 'relative' }} className="stage-container" key={stage.id}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '105px',
                                    height: '45px',
                                    borderRadius: '20px',
                                    backgroundColor: stage.customColor || (stage.completed ? '#ccc' : '#ccc'),
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'background-color 0.3s', // Smooth transition effect
                                }}
                                className={`stage ${stage.completed ? 'completed' : ''}`}
                                id={stage.id}
                                onMouseEnter={() => {
                                    if (!stage.completed) {
                                        const el = document.getElementById(stage.id);
                                        if (el) {
                                            el.style.backgroundColor = 'orange';
                                        }
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (!stage.completed) {
                                        const el = document.getElementById(stage.id);
                                        if (el) {
                                            el.style.backgroundColor = '#ccc';
                                        }
                                    }
                                }}
                            >
                                <div style={{ textAlign: 'center', fontSize: '12px' }} className="stage-name">
                                    {stage.name}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{ position: 'absolute', top: '47%', left: '10px', width: 'calc(100% - 108px)', height: '2px', backgroundColor: '#373636', zIndex: '-1' }} className="connector-line"></div>
                </div>
            </div>
            <div id="task-list" className="task-list"></div>
        </div>
    );
};

export default ProjectTimeline;
