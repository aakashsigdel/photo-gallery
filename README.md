# React Photo Gallery Component

To get started, clone/download this repo (do not fork) and use it to create your own GitHub repo with this exact code on `master`. Commit your changes to a separate branch. When your code is ready to review, great a pull request on your own repo and mention @simpixelated. If you need help getting setup with Webpack, Babel, or ESLint, [read about the starter kit](https://github.com/simpixelated/react-es6-starter).

## Goal

Create a thumbnail gallery component in React that allows for removing photos from the set. If possible, allow sorting via drag and drop.

### Acceptance Criteria
* photos are displayed as thumbnails in a list or [grid view](http://www.material-ui.com/#/components/grid-list)
* clicking a thumbnail opens full size image in a new tab
* each thumbnail has a checkmark for selecting and a trash can icon for deleting
* can select multiple images and click a single button to delete from gallery
* deleting image(s) will prompt the user to confirm

#### Stretch Goals
* allow "ready only" view to be set via props, which would hide icons and disable sorting
* images can be re-ordered
* **super stretch goal:** images can be reordered by drag and drop

#### Development Notes
* should use [Material-UI](http://www.material-ui.com/) components whenever possible
* photo data should come from props (e.g. passed into the component like `<PhotoGallery photos={photos} />`)
* changes can all be maintained in `state` and they do not need to persist on refresh, however the changed photo data should be exportable via an `onChange` callback that is called every time a change is made
* this is not a test of your CSS or design skills

Example usage:
```javascript
const photos = [
  {
    fileName: 'sweet photo',
    fileUrl: 'sweet-photo.png'
  }
];

ReactDOM.render(
  <PhotoGallery photos={photos} editable={true} />,
  document.getElementById('root')
);

```
