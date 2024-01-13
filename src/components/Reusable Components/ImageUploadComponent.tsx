import ImageUploading from 'react-images-uploading';
import { InputWrapper } from '@mantine/core';
import {IconX, IconEdit, IconUpload} from '@tabler/icons-react'
import { ActionIcon } from '@mantine/core';
import { Button } from '@mantine/core';



export default function ImageUploadComponent({images, setImages}) {


  const maxNumber = 1;
  // const maxFileSize = 1024;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList, addUpdateIndex);

 
  };


  return (
    <>
    <div className='fileinput_container'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          dragProps,
          errors,
        }) => (
          <>
            <InputWrapper
              label="File Input"
              size='md'
              styles={{
                label: {
                  fontWeight: '600'
                }
              }}
            >
              {errors && (
              <div>
                {errors.maxNumber && <span className='file_upload_error'>Number of selected images exceeds the limit</span>}
                {errors.acceptType && <span>Your selected file type is not allowed</span>}
                {errors.maxFileSize && <span>Selected file size exceeds max file size</span>}
              </div>
            )}
              <div className="upload__image-wrapper">
                {imageList.length >= 2 && (
                  <Button
                    style={{ width: '140px' }}
                    leftSection={<IconX size={14} color='white' />}
                    variant="filled"
                    color="red"
                    size="md"
                    onClick={onImageRemoveAll}
                  >
                    Remove all
                  </Button>
                )}
                &nbsp;
                <Button
                  leftSection={<IconUpload size={14} color='yellow' />}
                  variant="filled"
                  color="gray"
                  size="md"
                  onClick={onImageUpload}
                  style={{ width: '140px' }}
                  {...dragProps}
                >
                  Upload
                </Button>
              </div>
              <div className='imagefileupload_container'>
                {imageList.map((image, index) => (
                  <div key={index} className="image-itemUpload">
                    <div className="image-itemUpload__btn-wrapper">
                      <ActionIcon className='Xbutton' variant="filled" color="red" aria-label="Settings" radius='lg' size='sm' onClick={() => onImageRemove(index)}>
                        <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon className='editbutton' variant="filled" aria-label="Settings" radius='lg' size="sm" onClick={() => onImageUpdate(index)}>
                        <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} />
                      </ActionIcon>
                    </div>
                    <img src={image['data_url']} alt="" width="170" height="170" />
                  </div>
                ))}
              </div>
            </InputWrapper>
          </>
        )}
      </ImageUploading>
      </div>
    </> 
  );
}