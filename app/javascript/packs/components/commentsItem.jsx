import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const TopComment = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
`;

const UserContainer = styled.div`
  width: auto;
  margin-right: 5px;
  font-weight: 900;
`;

const DateContainer = styled.div`
  width: 25%;
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;

const CommentItem = ({usuario, dateComment, description }) => (
  <>
    <CommentContainer>
            <TopComment>
              <UserContainer>{usuario} </UserContainer>
              <DateContainer> el {dateComment}</DateContainer>
            </TopComment>
            <DescriptionContainer>
              {description}
            </DescriptionContainer>
    </CommentContainer>
</>
);

export default CommentItem;