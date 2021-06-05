import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

function DraggableColorList({newColors, deleteColor}) {
	return (
		<div style={{height: "100%"}}>
			{newColors.map((color, index) => (
				<DraggableColorBox
                    index={index}
					key={color.name}
					color={color.color}
					name={color.name}
					deleteColor={() => deleteColor(color.name)}
				/>
			))}
		</div>
	);
}

export default SortableContainer(DraggableColorList);
