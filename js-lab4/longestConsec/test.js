// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


function testing(actual, expected) {
	Test.assertEquals(actual, expected)
}

Test.describe("longestConsec", function () {
	Test.it("Basic tests", function () {
		testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
		testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
		testing(longestConsec([], 3), "")
		testing(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
		testing(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
		testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
		testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
		testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
		testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
	})
})
