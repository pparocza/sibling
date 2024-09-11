import { IS } from "./scripts/UI.js"
let osc;

export function load()
{
    osc = IS.osc("sawtooth", 80);
    const filter = IS.biquadFilter("lowpass");

    osc.connect(filter.filter);
    filter.connect(IS.output);

    /*
        IS.createChannel("channelName") --> IS.connectToChannel("channelName", audioNode) / IS.connectToChannel("channelName", [audioNodes])
     */
}

export function start()
{
    osc.start();
}

export function stop()
{
    osc.stop();
}