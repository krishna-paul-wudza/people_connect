import styled from '@emotion/styled';
import RootRouting from './Routing/RootRouting';
import { ThemeColors } from './Theme/color';

function App() {
  return (
    <AppContainer>
      <RootRouting />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100vh;
  background-color: pink;
`;
