export async function getAllCourseSlugs(): Promise<string[]> {
  return ['english', 'math', 'science']; // or fetch from DB/CMS
}
