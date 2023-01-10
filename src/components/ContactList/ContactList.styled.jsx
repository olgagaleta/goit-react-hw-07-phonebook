import styled from '@emotion/styled';

export const ContactListItem = styled.li`
  text-align: center;
  list-style: none;
  padding: ${props => props.theme.spacing(1)};
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: ${props => props.theme.spacing(4)};
  line-height: 1.2;
  color: #333232;
`;

export const DeleteButton = styled.button`
  margin: 0 ${props => props.theme.spacing(2)};
`;
