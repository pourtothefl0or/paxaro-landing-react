import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { paths } from '../config/path.js';
const { src, dest } = gulp;

export function fonts() {
  return src(paths.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(paths.dist.fonts))
    .pipe(src(paths.src.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(paths.dist.fonts));
}
