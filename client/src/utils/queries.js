import { gql } from '@apollo/client';
//reference activity 26
export const GET_ME = gql`
  query me {
    users {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
        }
    }
  }
`;
