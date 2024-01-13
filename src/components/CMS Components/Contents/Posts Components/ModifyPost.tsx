import { ScrollArea } from "@mantine/core";
import PostTitleForm from "../../../Reusable Components/PostTitleForm";
import PostDescriptionForm from "../../../Reusable Components/PostDescriptionForm";
import PostDropdownForm from "../../../Reusable Components/PostDropdownForm";
import ImageUploadComponent from "../../../Reusable Components/ImageUploadComponent";
import SubmitDiscard from "../../../Reusable Components/SubmitDiscard";
import { useState, useEffect } from 'react';


export default function ModifyPost() {
  const [postTitle, setPostTitle] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [clearData, setClearData] = useState(false);

  const validateForm = () => {
    if (!postTitle || !category || !status || !description || images.length === 0) {
      return window.confirm('All form fields are required. Please Input all');
    }
    return true;
  };

  const handlePostButtonClick = () => {
    if (validateForm()) {
      const postData = {
        postTitle,
        category,
        status,
        description,
        images
      };

      // TODO: Add logic to save postData to a JSON file or send it to a server
      console.log('Posting Data:', postData);
    }
  };

  const handleDiscardButtonClick = () => {
    const confirmDiscard = window.confirm('Are you sure you want to discard changes?');

    if (confirmDiscard) {
      setPostTitle('');
      setCategory('');
      setStatus('');
      setDescription('');
      setImages([]);
      setClearData(true);
    }
  };

  useEffect(() => {
    console.log(postTitle);
  }, [postTitle, category, status, description, images]);
  

  return (
    <>
      <ScrollArea
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2%",
          height: "77vh",
        }}
      >
        <h3>Modify Posts</h3>
        <div className="CMS_CreatePosts_Container">
          <div className="Posts-InnerRow">
            <PostTitleForm onChange={(value) => setPostTitle(value)} clearData={clearData} setClearData={setClearData}/>
          </div>
          <div className="Posts-InnerRow">
            <PostDropdownForm clearData={clearData} setClearData={setClearData}
              label="Category"
              data={['Option 1', 'Option 2', 'Option 3']}
              onChange={(value) => setCategory(value)}
            />
          </div>
          <div className="Posts-InnerRow">
            <PostDropdownForm clearData={clearData} setClearData={setClearData}
              label="Status"
              data={['Option 1', 'Option 2', 'Option 3']}
              onChange={(value) => setStatus(value)}
            />
          </div>
          <div className="Posts-InnerRowQuill">
            <PostDescriptionForm onChange={(value) => setDescription(value)} clearData={clearData} setClearData={setClearData} />
          </div>
          <div className="Posts-InnerRow">
            <ImageUploadComponent images={images} setImages={setImages}/>
          </div>
          <div className="Posts-InnerRow">
            <SubmitDiscard
              onPostClick={handlePostButtonClick}
              onDiscardClick={handleDiscardButtonClick}
            />
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
