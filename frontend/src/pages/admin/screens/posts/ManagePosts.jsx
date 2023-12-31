import React from "react";
//import { useParams } from "react-router-dom";
import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "../../../../services/posts";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
//import ErrorMessage from "../../../../components/ErrorMessage";






let isFirstRun = true;

const ManagePosts = () => {
  //const articleId = useParams();
  const queryClient = useQueryClient(); 
  const navigate = useNavigate();
  const userState = useSelector((state)=> state.user);
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["articles"],
    
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
    
  }
  );
  const token = userState.userInfo?.data?.token;
 

  //delete post function
  const { mutate: mutateDeletePost, isLoading: isLoadingDeletePost } =
  useMutation({
    mutationFn: ({ articleId, token }) => {
      return deletePost({
        articleId,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["articles"]);
      toast.success("Post is deleted");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

useEffect(() => {
  if (isFirstRun) {
    isFirstRun = false;
    return;
  }
  refetch();
}, [refetch]);

  
const deletePostHandler = ({ articleId, token }) => {
  const userResponse = window.confirm("Are you sure you want to delete this post? this action is not reversible!\nEither OK or Cancel.");
  if(userResponse === true ){
    mutateDeletePost({ articleId, token });
  }
 
  
};
 


  return <div>
      <div>MANAGE POSTS</div>

      {/** table component */}
      
<div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-2xl leading-normal">
                                <th className="py-3 px-6 text-left">Post Title</th>
                                <th className="py-3 px-6 text-left">Image</th>
                              
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-black text-xl font-light">
                          {data?.data?.data.map((posts)=>
                            
                           <tr key={posts.articleId} className="border-b border-gray-200 hover:bg-gray-100">
                         
                           <td className="py-3 px-6 text-left">
                               <div className="flex items-center">
                                   <div className="mr-2">
                                       <img className="w-6 h-6 rounded-full" src={posts.image}/>
                                   </div>
                                   <span> {posts.title} </span>
                               </div>
                           </td>
                           <td className="py-3 px-6 text-center">
                               <div className="flex items-center justify-center">
                                   <img className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src={posts.image}/>
                                  
                               </div>
                           </td>
                          
                           <td className="py-3 px-6 text-center text-2xl">
                               <div className="flex item-center justify-center">
                                   <div onClick={()=> navigate(`/articles/${posts.articleId}`)} className="w-4 mr-2 transform hover:text-eni_orange hover:scale-120">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                       </svg>
                                   </div>
                                   <div onClick={()=> navigate(`edit/${posts.articleId}`)} className="w-4 mr-2 transform hover:text-green-500 hover:scale-120">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                       </svg>
                                   </div>
                                   <div  onClick={() => {
                              deletePostHandler({
                                articleId: posts.articleId,
                                token: token,
                                
                              });
                            }}  className="w-4 mr-2 transform  hover:text-red-500 hover:scale-120">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                       </svg>
                                   </div>
                               </div>
                           </td>
                       </tr>

                          )}
                            
                             
                                                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
};

export default ManagePosts;