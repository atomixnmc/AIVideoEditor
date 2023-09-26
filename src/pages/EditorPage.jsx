import EditorLayout from '../components/layout/EditorLayout.jsx';

import Toolbar from '../components/editor/Toolbar.jsx';
import TrackTree from '../components/editor/TrackTree.jsx';
import PreviewViewport from '../components/editor/PreviewViewport.jsx';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import ScriptView from '../components/editor/ScriptView.jsx';
import TrackTimeline from '../components/editor/TrackTimeline.jsx';

import { Audio, staticFile } from 'remotion';

export default function EditorPage({}) {
  return (
    <EditorLayout
      // top={<Toolbar h="40px" />}
      bottom={<TrackTimeline />}
    >
      <Tabs variant="enclosed" w="100%">
        <TabList>
          {/* <Tab>Script</Tab> */}
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels>
          {/* <TabPanel>
            <ScriptView />
          </TabPanel> */}
          <TabPanel>
            <PreviewViewport />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </EditorLayout>
  );
}
