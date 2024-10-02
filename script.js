import { InfiniteSibling } from "../node_modules/infinitesibling";
const IS = new InfiniteSibling();

function load()
{
}

function start()
{
    IS.start();
}

function stop()
{
    IS.stop();
}

export { load, start, stop };