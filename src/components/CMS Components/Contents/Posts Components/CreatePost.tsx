import {ScrollArea } from "@mantine/core";
import PostTitleForm from "../../../Reusable Components/PostTitleForm";
import PostDescriptionForm from "../../../Reusable Components/PostDescriptionForm";
import PostDropdownForm from "../../../Reusable Components/PostDropdownForm";



export default function CreatePost(){
  
    return(
        <>
        <ScrollArea
            style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "2%",
            height: "77vh",
            }}
        >
         <h3>Create Posts</h3>
         <div className="CMS_CreatePosts_Container">
            <div className="Posts-InnerRow">
                <PostTitleForm/>
            </div>
            <div className="Posts-InnerRow">
                <PostDropdownForm/>
            </div>
            <div className="Posts-InnerRow">
                <PostDropdownForm/>
            </div>
            <div className="Posts-InnerRowQuill">
                <PostDescriptionForm/>
            </div>
            
            
         </div>
    
         </ScrollArea>

        </>
    );
}