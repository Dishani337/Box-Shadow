import { useState } from 'react';
import './App.css';

function App() {
	const [ Hori, setHori ] = useState(10);
	const [ Veri, setVeri ] = useState(10);
	const [ Blur, setBlur ] = useState(10);
	const [ Color, setColor ] = useState('Black');
	const [ Boxcolor, setBoxcolor ] = useState('blueviolet');
	const [ CheckOn, setCheckOn ] = useState(false);
	return (
		<div className="App">
			<h3>Shadow Box</h3>
			<div className="Shadow-box">
				<div className="controls">
					<label className="label" for="vol">
						Horizontal:
					</label>
					<input
						className="input"
						type="range"
						min="-200"
						max="200"
						value={Hori}
						onChange={(e) => setHori(e.target.value)}
					/>
					<label className="label" for="vol">
						Vertical:
					</label>
					<input
						className="input"
						type="range"
						min="-200"
						max="200"
						value={Veri}
						onChange={(e) => setVeri(e.target.value)}
					/>
					<label className="label" for="vol">
						Blur:
					</label>
					<input
						className="input"
						type="range"
						min="0"
						max="200"
						value={Blur}
						onChange={(e) => setBlur(e.target.value)}
					/>
					<label className="label" for="vol">
						Color:
					</label>
					<input className="color" type="color" value={Color} onChange={(e) => setColor(e.target.value)} />
					<br />

					<label className="label" for="vol">
						Box Color:
					</label>
					<input
						className="color"
						type="color"
						value={Boxcolor}
						onChange={(e) => setBoxcolor(e.target.value)}
						style={{ marginLeft: '2%' }}
					/>

					<div className="switch">
						<label className="label">
							Outline
							<input type="checkbox" value={CheckOn} onChange={() => setCheckOn(!CheckOn)} />
							<span className="lever" />
							Inset
						</label>
					</div>
				</div>
				<div className="output">
					<div
						className="box"
						style={{
							backgroundColor: `${Boxcolor}`,
							boxShadow: ` ${CheckOn ? 'inset' : ''} ${Hori}px ${Veri}px ${Blur}px ${Color} `
						}}
					>
						<p className="p">
							Box-shadow:-{Hori}px,
							{Veri}px,
							{Blur}px,
							{Boxcolor},
							{Color}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
