import React from 'react';
import { Text } from 'ink';

type Props = {
	name: string;
    fancy: string;
};

const App: React.FC<Props> = ({ name, fancy }: Props) => {

    if (fancy) {
		return (
			<Text color="green">
				✨✨ Hello, <Text color="cyanBright">{name}</Text>! ✨✨
			</Text>
		);
	}
	return <Text>Hello, {name}!</Text>;
};

export default App;
