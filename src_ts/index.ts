
/*!
 * noa: an experimental voxel game engine.
 * @url      github.com/fenomas/noa
 * @author   Andy Hall <andy@fenomas.com>
 * @license  MIT
 */

import '../src/lib/shims'

import { EventEmitter } from 'events'
import vec3 from 'gl-vec3'
import ndarray from 'ndarray'
import raycast from 'fast-voxel-raycast'

import { Inputs } from '../src/lib/inputs'
import { Container } from '../src/lib/container'
import { Camera } from '../src/lib/camera'
import { Entities } from '../src/lib/entities'
import { ObjectMesher } from '../src/lib/objectMesher'
import { TerrainMesher } from '../src/lib/terrainMesher'
import { Registry } from '../src/lib/registry'
import { Rendering } from '../src/lib/rendering'
import { Physics } from '../src/lib/physics'
import { World } from '../src/lib/world'
import { locationHasher } from '../src/lib/util'
import { makeProfileHook } from '../src/lib/util'

import packageJSON from '../package.json'