// Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () =>{

    return(
       <div className="ui container comments">
           <ApprovalCard>
           <h4 style={{textAlign: "center"}}>JP2GMD</h4>
           </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={Faker.internet.userName()}
                    timeAgo={Faker.date.past()}
                     avatar_img={Faker.image.avatar()}
                    comment_text={Faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
               <CommentDetail
                   author={Faker.internet.userName()}
                   timeAgo={Faker.date.past()}
                   avatar_img={Faker.image.avatar()}
                   comment_text={Faker.lorem.sentence()}
               />
            </ApprovalCard>
            <ApprovalCard>
               <CommentDetail
                   author={Faker.internet.userName()}
                   timeAgo={Faker.date.past()}
                   avatar_img={Faker.image.avatar()}
                   comment_text={Faker.lorem.sentence()}
               />
            </ApprovalCard>
       </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);