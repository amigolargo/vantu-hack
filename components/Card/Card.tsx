import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export function DemoCard({ index, setShowGoogleMaps }) {
  const theme = useMantineTheme();

  const points = [
      [58.07682, 6.81961],
      [58.07890, 7.78830],
      [58.12432, 8.20904],
      [58.16049, 8.31186],
      [59.07216, 10.2780],
  ];

  const tags = [
      ['forest', 'stone beach', 'fjord'],
      ['view', 'cliffs', 'private'],
      ['trails', 'forest', 'cycling'], 
      ['sea', 'sandy beach', 'protected'],  
      ['forest', 'stone beach', 'fjord'],
  ]

  return (
    <div style={{ margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={`/site${index}.jpeg`} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{`${points[index][0]}, ${points[index][1]}`}</Text>
        </Group>

        {tags[index].map(tag => (<Badge color="gray">{tag}</Badge>))}

        <Button variant="light" color="#01A333" radius="sm" style={{ margin: '14px 14px 0 0' }} onClick={() => setShowGoogleMaps(true)}>
          Open in Maps
        </Button>
        <Button variant="light" color="red" radius="sm" style={{ marginTop: 14 }}>
          Reject
        </Button>
      </Card>
    </div>
  );
}