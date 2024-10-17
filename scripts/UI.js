import * as main from "../script.js";
import { IS } from "../script.js";

const START_BUTTON = document.querySelector('.START_BUTTON');
const START_STRING = "start";
const STOP_STRING = "stop";
const LOAD_STRING = "load";
const LOADING_STRING = "...loading";
const RESET_STRING = "reset";

const ONLINE_BUTTON = document.querySelector('.ONLINE_BUTTON');
const ONLINE_STRING = "online";
const OFFLINE_STRING = "offline";

const GAIN_SLIDER = document.querySelector('.GAIN_SLIDER');
const GAIN_DISPLAY = document.querySelector('.GAIN_VALUE_DISPLAY');

const PIECE_SELECTION_DROPDOWN = document.querySelector('.SIBLING_SELECTION_MENU');
const SIBLING_SCRIPT = document.querySelector('.SIBLING_SCRIPT');
const SIBLING_PATH = './scripts/siblings/'

PIECE_SELECTION_DROPDOWN.oninput = function ()
{
	SIBLING_SCRIPT.src = SIBLING_PATH + PIECE_SELECTION_DROPDOWN.value + "/script.js";
}

ONLINE_BUTTON.onclick = function()
{
	ONLINE_BUTTON.innerHTML === ONLINE_STRING ?
		ONLINE_BUTTON.innerHTML = OFFLINE_STRING :
		ONLINE_BUTTON.innerHTML = ONLINE_STRING;
}

START_BUTTON.onclick = function()
{
	switch (START_BUTTON.innerHTML)
	{
		case (LOAD_STRING):
			handleLoad();
			break;
		case (START_STRING):
			handleStart();
			break;
		case (RESET_STRING):
			handleReset();
			break;
		case (STOP_STRING):
			handleStop();
			break;
		default:
			break;
	}
}

function handleLoad()
{
	switch(ONLINE_BUTTON.innerHTML)
	{
		case (ONLINE_STRING):
			loadOnline();
			break;
		case (OFFLINE_STRING):
			loadOffline();
			break;
		default:
			break;
	}
}

function loadOnline()
{
	PIECE_SELECTION_DROPDOWN.disabled = true;
	setStartButton(LOADING_STRING, true);
	IS.onReady(setStartButtonReady);
	setTimeout(() => { main.load() }, 500);
}

function loadOffline()
{
	PIECE_SELECTION_DROPDOWN.disabled = true;
	setStartButton(LOADING_STRING, true);
	IS.onReady(setStartButtonReady);
	setTimeout(() => { main.load() }, 500);
}

function handleStart()
{
	switch(ONLINE_BUTTON.innerHTML)
	{
		case (ONLINE_STRING):
			startOnline();
			break;
		case (OFFLINE_STRING):
			startOffline();
			break;
		default:
			break;
	}

	setStartButton(STOP_STRING, false);
}

function startOnline()
{
	setStartButton(STOP_STRING, false);
	main.start();
}

function startOffline()
{
	setStartButton(STOP_STRING, false);
}

function handleReset()
{
	location.reload();
}

function handleStop()
{
	main.stop();
	setStartButton(RESET_STRING, false);
}

function setStartButton(label, disabled)
{
	START_BUTTON.innerHTML = label;
	START_BUTTON.disabled = disabled;
}

function setStartButtonReady()
{
	setStartButton(START_STRING, false);
}

GAIN_SLIDER.oninput = function()
{
	GAIN_DISPLAY.innerHTML = parseInt(volume * 100) + "%";
}
