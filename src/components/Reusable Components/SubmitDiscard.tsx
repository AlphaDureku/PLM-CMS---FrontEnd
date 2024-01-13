import { Group, Button } from '@mantine/core';

export default function SubmitDiscard ({ onPostClick, onDiscardClick }) {
    return(
        <>
        <Group justify="flex-end" gap="xs">
            <Button variant="filled" color='#CCA000'onClick={onPostClick}>Submit</Button>
            <Button variant="filled" color='#701114'onClick={onDiscardClick}>Discard</Button>
        
        </Group>
            
        </>





    );
}