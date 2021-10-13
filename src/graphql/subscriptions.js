/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      name
      answer {
        items {
          id
          title
          answerID
          nextQuestionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      name
      answer {
        items {
          id
          title
          answerID
          nextQuestionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      name
      answer {
        items {
          id
          title
          answerID
          nextQuestionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      title
      answerID
      nextQuestionID
      question {
        id
        name
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      title
      answerID
      nextQuestionID
      question {
        id
        name
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      title
      answerID
      nextQuestionID
      question {
        id
        name
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
