import styled from 'styled-components';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

export const CreateCategoryContainer = styled.div`
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 380px;
  background-color: white;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const CreateCategoryHeading = styled.div`
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const ModalInput = styled(FormInput)`
  background-color: #f5f5f5;
`;

export const FileInput = styled.input`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const CreateButton = styled(FormButton)`
  width: 150px;
`;

export const Cancel = styled.span`
  cursor: pointer;
`;
