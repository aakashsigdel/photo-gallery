# React Photo Gallery Component

If you need help getting setup with Webpack, Babel, or ESLint, [read about the starter kit](https://github.com/simpixelated/react-es6-starter).

### Editable Image Gallery

#### Acceptance Criteria
* initial view is a gallery of thumbnails ([grid list](http://www.material-ui.com/#/components/grid-list))
* clicking a thumbnail opens full size image in a new window
* each thumbnail has a checkmark for selecting and a trash can icon for deleting
* can select multiple images and click a button to delete from gallery
* deleting image(s) will prompt the user to confirm

#### Stretch Goals
* images can be re-ordered by dragging

#### Development Notes
* should use [Material-UI](http://www.material-ui.com/) components whenever possible
* photo data should come from props (e.g. passed into the component like `<PhotoGallery photos={photos} />`)
* changes can all be maintained in `state` and they do not need to persist on refresh, however the changed photo data should be exportable via an `onChange` callback that is called every time a change is made

Example usage:
```javascript
<PhotoGallery photos={photos} />
```

Example photos array:
```javascript
var photos = [
  {
    fileSize: 124564,
    fileName: 'sweet-photo.png'
  }
];
```