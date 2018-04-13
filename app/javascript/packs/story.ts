// * import Story from story.ts
//   (for an example, see how packs/application.ts imports App from app.ts)
// * create an instance of Story and call the 'init' method on that instance
import { Story } from '../story';

document.addEventListener("DOMContentLoaded", () => {
  const story = new Story().init();
});
