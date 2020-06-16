import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import TodoList from './TodoListComponent';

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className = 'container tab-container'>
        <div className='row'>
            <div className='col'>
                <Nav tabs>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <img className='emoji' src={require('../assets/panic-blob.png')} /> Outstanding
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <img className='emoji' src={require('../assets/happy-blob.png')} /> Completed
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        All
                    </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <TodoList tabFilter='outstanding' />
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <TodoList tabFilter='completed' />
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <TodoList tabFilter='all' />
                        </Row>
                    </TabPane>
                </TabContent>    
            </div>
        </div>
    </div>
  );
}

export default Tab;