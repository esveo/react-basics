import { any, arrayOf, bool, shape, string } from 'prop-types'
import React from 'react'
import * as Three from 'three'

import TEXTURES from './textures'

/**
 * A graphical view of all satellites.
 */
class SatelliteVisualization extends React.Component {
  animationFrame = null
  containerRef = React.createRef()
  lastDimensions = { height: null, width: null }
  lastTimestamp = null
  three = {}

  componentDidMount() {
    this.setupRenderer()
    this.setupScene()
    this.setupCamera()
    this.animationFrame = requestAnimationFrame(this.repaint)
  }

  setupRenderer() {
    this.three.renderer = new Three.WebGLRenderer({ antialias: true })
    this.three.renderer.setClearColor('#20212c')
    this.containerRef.current.appendChild(this.three.renderer.domElement)
  }

  setupScene() {
    this.three.scene = new Three.Scene()

    const earthGeometry = new Three.SphereGeometry(0.8, 16, 12)
    const earthMaterial = new Three.MeshPhongMaterial({ color: '#cccdda', wireframe: true })
    this.three.earth = new Three.Mesh(earthGeometry, earthMaterial)
    this.three.scene.add(this.three.earth)

    const testMaterial = new Three.SpriteMaterial({ color: 'white', map: TEXTURES.military })
    this.three.test = new Three.Sprite(testMaterial)
    this.three.scene.add(this.three.test)

    const light = new Three.DirectionalLight()
    light.position.z = 10
    this.three.scene.add(light)
  }

  setupCamera() {
    this.three.camera = new Three.PerspectiveCamera(75, undefined, 0.1, 1000)
    this.three.camera.rotation.z = 0.4101
    this.three.camera.position.z = 2
  }

  componentWillUnmount() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame)
  }

  render() {
    return <div ref={this.containerRef} />
  }

  repaint = timestamp => {
    const timePassed = this.lastTimestamp ? timestamp - this.lastTimestamp : 0
    this.lastTimestamp = timestamp
    this.animationFrame = requestAnimationFrame(this.repaint)
    this.updateDimensions()
    this.animateScene(timePassed)
    this.three.renderer.render(this.three.scene, this.three.camera)
  }

  updateDimensions() {
    const { clientHeight: height, clientWidth: width } = this.containerRef.current
    if (height === this.lastDimensions.height && width === this.lastDimensions.width) return
    this.three.camera.aspect = width / height
    this.three.camera.updateProjectionMatrix()
    this.three.renderer.setSize(width, height, false)
  }

  animateScene(timePassed) {
    this.three.earth.rotation.y -= timePassed * 2e-4
  }
}

SatelliteVisualization.propTypes = {
  /**
   * The satellites to be displayed.
   */
  satellites: arrayOf(
    shape({
      isHighlit: bool,
      name: string.isRequired,
      type: any.isRequired,
    }),
  ).isRequired,
}

export default SatelliteVisualization
