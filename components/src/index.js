import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>
            LOREM IPSUM AHEAD!
          </h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          consequatur odio et ratione minima molestiae maiores impedit
          doloremque libero labore culpa facilis assumenda sunt incidunt optio
          iusto, totam molestias facere.
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          avatar={faker.image.avatar()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          avatar={faker.image.avatar()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          avatar={faker.image.avatar()}
          timeAgo={faker.date.weekday()}
          comment={faker.lorem.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
