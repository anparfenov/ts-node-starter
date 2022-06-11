import { suite } from "uvu";
import * as assert from "uvu/assert";
import { main } from '../src/index';

const TestSuite = suite("test suite");

TestSuite("should work", async function () {
	assert.equal(main(), 0);
});


TestSuite.run();
