import { Group, Button, Space } from '@mantine/core';
import { IconCirclePlus, IconPencil, IconUsers,IconBrowserPlus} from '@tabler/icons-react';

export default function Dashboard({setSelectedGrandChild}) {
  const buttonStyle = {
    width: '250px',
    height: '50px', 
    backgroundColor: '#ffff'    
  };

  function onClickCreate(){
    setSelectedGrandChild("Create Posts")
  };

  return (
    <div className='Dashboard_Container'>
      <div className='Dashboard_Row'>
        <Group justify="center">
          <Button style={buttonStyle} variant="outline" color="gray" leftSection={<IconCirclePlus size={20} 
          onClick={onClickCreate}/>}>
            Create Post
          </Button>

          <Space w="xl" />

          <Button style={buttonStyle} variant="outline" color="gray" leftSection={<IconPencil size={20} />}>
            Manage Post
          </Button>
        </Group>
      </div>    
      <div className='Dashboard_Row'>
        <Group justify="center">
          <Button style={buttonStyle} variant="outline" color="gray" leftSection={<IconUsers size={20} />}>
            Accounts
          </Button>
          <Space w="xl" />

          <Button style={buttonStyle}variant="outline" color="gray" leftSection={<IconBrowserPlus size={20} />}>
            Create Tags
          </Button>
        </Group>
      </div>
    </div>
  );
}
