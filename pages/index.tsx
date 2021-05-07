import React from 'react';
import { Badge, Card, Heading, PlusIcon, Pane, Pill } from 'evergreen-ui';
import { cheatsheetDatas } from '../cheatsheetDatas';

export default function Home() {
  return (
    <Pane>
      <Pane display="flex" alignItems="center" justifyContent="center" marginBottom={50}>
        <Heading size={900} marginTop="default">
          Chloe's Cheatsheets!
        </Heading>
      </Pane>
      <Pane margin={30}>
        {cheatsheetDatas.map((data) => {
          return (
            <Card
              height={150}
              width={250}
              float="left"
              border="default"
              margin={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              key={data.id}
            >
              <Heading size={700} margin="default">
                {data.name}
              </Heading>
              <Pane marginLeft={10} marginRight={10}>
                {data.keys.map((key, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Badge color="purple">{key}</Badge>
                      {index === data.keys.length - 1 ? (
                        <></>
                      ) : (
                        <PlusIcon color="muted" size={8} marginLeft={5} marginRight={5} />
                      )}
                    </React.Fragment>
                  );
                })}
              </Pane>
              {data.tags.length > 0 && (
                <Pane marginLeft={10} marginRight={10}>
                  {data.tags.map((tag, index) => {
                    return (
                      <Pill
                        key={index}
                        display="inline-flex"
                        marginTop={10}
                        marginLeft={5}
                        marginRight={5}
                        color="yellow"
                        isSolid
                      >
                        {tag}
                      </Pill>
                    );
                  })}
                </Pane>
              )}
            </Card>
          );
        })}
      </Pane>
    </Pane>
  );
}
