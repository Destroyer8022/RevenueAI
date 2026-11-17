// Tricolor theme: Midnight Navy #00131F, Deep Olive #193500, Rich Teal #259F94.
// Default blue/violet/cyan/emerald/indigo utilities are remapped to the palette so existing classes follow the theme.
const teal={50:'#effaf9',100:'#d5f2ef',200:'#aee5df',300:'#7dd0c8',400:'#4cb8ae',500:'#259F94',600:'#1c8178',700:'#1a675f',800:'#19534e',900:'#17453f',950:'#0b2a27'}
const olive={50:'#f4f8e8',100:'#e6efcc',200:'#cddf9d',300:'#a3c35e',400:'#6f9a2b',500:'#4a7410',600:'#2f5300',700:'#193500',800:'#142b00',900:'#0e1e00',950:'#081300'}
const navy={50:'#f1f6f8',100:'#e2eaed',200:'#c5d3d9',300:'#a3b5bd',400:'#7d929c',500:'#5f7681',600:'#475e69',700:'#2a404a',800:'#0B1D0A',900:'#030805',950:'#010402'}
const lime={...olive,400:'#a3c35e',500:'#8fb03f',700:'#cddf9d'}
const brick={50:'#fdf1ef',100:'#f6d5d0',200:'#efb7af',300:'#e8998f',400:'#d9705f',500:'#cc4b3c',600:'#b03a2d',700:'#9c2f24',800:'#7e2a21',900:'#66251e'}
export default {content:['./index.html','./src/**/*.{ts,tsx}'],theme:{extend:{colors:{
 teal,olive,navy,slate:navy,violet:teal,blue:teal,cyan:teal,indigo:teal,emerald:teal,sky:teal,purple:teal,amber:lime,rose:brick,red:brick}}},plugins:[]}
