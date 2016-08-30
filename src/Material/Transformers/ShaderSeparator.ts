import ITransformingInfo from "./ITransformingInfo";

function _removeOtherPart(source: string, partFlag: string): string {
  const regex = new RegExp(`\s*(?:\/\/+)?\s*@${partFlag}`, "g");
  while (true) {
    const found = regex.exec(source);
    if (!found) {
      break; // When there was no more found
    }
    let beginPoint = found.index;
    let index = source.indexOf("{", beginPoint); // ignore next {
    const endPoint: number = _getEndBracketIndex(source, index, "{", "}") + 1;
    if (endPoint < 1) {
      // error no bracket matching
      console.error("Invalid bracket matching!");
      return source;
    }

    source = source.substr(0, beginPoint) + source.substring(endPoint, source.length);
  }
  return source;
}

function _removeSelfOnlyTag(source: string, partFlag: string): string {
  const regex = new RegExp(`(\s*(?:\/\/+)?\s*@${partFlag})`, "g");
  while (true) {
    const found = regex.exec(source);
    if (!found) {
      break; // When there was no more found
    }
    let index = source.indexOf("{", found.index); // ignore next {
    let beginPoint = index;
    const endPoint: number = _getEndBracketIndex(source, index, "{", "}") + 1;
    if (endPoint < 1) {
      // error no bracket matching
      console.error("Invalid bracket matching!");
      return source;
    }
    source = source.substr(0, found.index) + source.substring(beginPoint + 1, endPoint - 1) + source.substring(endPoint + 1, source.length);
  }
  return source;
}

function _getEndBracketIndex(source: string, startIndex: number, beginBracket: string, endBracket: string): number {
  // get index of matching endBracket
  let index = startIndex;

  let bracketCount = 1;
  while (true) { // find matching bracket
    if (bracketCount === 0) {
      break;
    }
    index++;
    const nextEndBlacket = source.indexOf(endBracket, index);
    const nextBeginBlacket = source.indexOf(beginBracket, index);
    if (nextEndBlacket < 0) {
      // error no bracket matching
      console.error("Invalid bracket matching!");
      return -1;
    }
    if (nextBeginBlacket < 0) {
      index = nextEndBlacket;
      bracketCount--;
      continue;
    }
    if (nextEndBlacket < nextBeginBlacket) {
      index = nextEndBlacket;
      bracketCount--;
      continue;
    } else {
      index = nextBeginBlacket;
      bracketCount++;
      continue;
    }
  }
  return index;
}

export default async function(input: ITransformingInfo): Promise<ITransformingInfo> {
  let fragment = _removeSelfOnlyTag(_removeOtherPart(input.transforming, "vert"), "frag");
  let vertex = _removeSelfOnlyTag(_removeOtherPart(input.transforming, "frag"), "vert");
  input.info.fragment = fragment;
  input.info.vertex = vertex;
  return input;
}
