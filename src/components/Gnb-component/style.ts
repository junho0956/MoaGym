import styled from 'styled-components';

export const GNBContainer = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-top: 1px solid #E9E9E9;
`

export const GNBItem = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GNBImage = styled.div``

export const GNBLabel = styled.p`
  margin-top: 3px;
  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  color: ${(props: { selected: boolean }) => props.selected ? '#FF701D' : '#555555'};
  margin: 0;
`