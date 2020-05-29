import React from 'react';
import { Button } from 'antd';
import { Collapse } from 'antd';
import { List, Card } from 'antd';

import trainingsData from '../assets/config.json';

const { Panel } = Collapse;

class MainPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Collapse accordion>
          {trainingsData.map((section, key) => {
            return (
              <Panel header={section.title} key={key}>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                  }}
                  dataSource={section.children}
                  renderItem={(item) => (
                    <List.Item>
                      <Card title={item.title}>Card content</Card>
                    </List.Item>
                  )}
                />
              </Panel>
            );
          })}
        </Collapse>
      </>
    );
  }
}

export default MainPage;
