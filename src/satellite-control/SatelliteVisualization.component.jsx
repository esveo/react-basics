import { any, arrayOf, bool, number, shape, string } from 'prop-types'
import React from 'react'
import * as Three from 'three'

import TEXTURES from './textures'

/**
 * A graphical view of all satellites.
 */
class SatelliteVisualization extends React.Component {
  containerRef = React.createRef()
  lastDimensions = {}
  three = {
    satellites: [],
  }

  componentDidMount() {
    this.startTime = performance.now()
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
    this.createLight()
    this.createEarth()
    this.updateSatellites()
    this.updateScene(0)
  }

  createLight() {
    const light = new Three.DirectionalLight('white', 1.28)
    light.position.z = 10
    this.three.scene.add(light)
  }

  createEarth() {
    const geometry = new Three.SphereGeometry(1.08, 16, 12)
    const material = new Three.MeshPhongMaterial({ color: '#cccdda', wireframe: true })
    this.three.earth = new Three.Mesh(geometry, material)
    this.three.scene.add(this.three.earth)
  }

  setupCamera() {
    this.three.camera = new Three.PerspectiveCamera(2, undefined, 0.1, 1000)
    this.three.camera.rotation.z = 0.4101
    this.three.camera.position.z = 100
  }

  componentDidUpdate(prevProps) {
    if (this.props.satellites !== prevProps.satellites) this.updateSatellites()
  }

  updateSatellites() {
    this.three.earth.remove(...this.three.satellites)
    this.three.satellites = this.props.satellites.map(satellite => {
      const group = new Three.Group()
      group.setRotationFromEuler(
        new Three.Euler(
          satellite.initialLatitude,
          satellite.initialLongitude,
          satellite.angleOfFlight,
        ),
      )

      const spriteMaterial = new Three.SpriteMaterial({
        color: satellite.isHighlit ? '#1e95ff' : '#cccdda',
        map: TEXTURES[satellite.type],
      })
      const sprite = new Three.Sprite(spriteMaterial)
      sprite.scale.setScalar(0.08)
      group.add(sprite)

      const pathCurve = new Three.EllipseCurve(0, 0, 1.32, 1.32)
      const points = pathCurve.getPoints(64)
      const pathGeometry = new Three.BufferGeometry().setFromPoints(points)
      pathGeometry.rotateX(Math.PI / 2)
      const pathMaterial = new Three.LineDashedMaterial({
        color: satellite.isHighlit ? '#0086ff' : '#42445b',
        dashSize: 0.05,
        gapSize: 0.02,
      })
      const path = new Three.Line(pathGeometry, pathMaterial)
      path.computeLineDistances()
      group.add(path)

      const speed = satellite.speed * (satellite.reverse ? -1 : +1)
      group.userData = { speed, sprite }
      return group
    })
    this.three.earth.add(...this.three.satellites)
  }

  componentWillUnmount() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame)
  }

  render() {
    return <div ref={this.containerRef} />
  }

  repaint = () => {
    const timePassed = this.startTime - performance.now()
    this.animationFrame = requestAnimationFrame(this.repaint)
    this.updateDimensions()
    this.updateScene(timePassed)
    this.three.renderer.render(this.three.scene, this.three.camera)
  }

  updateDimensions() {
    const { clientHeight: height, clientWidth: width } = this.containerRef.current
    if (height === this.lastDimensions.height && width === this.lastDimensions.width) return
    this.three.camera.aspect = width / height
    this.three.camera.updateProjectionMatrix()
    this.three.renderer.setSize(width, height, false)
  }

  updateScene(timePassed) {
    this.three.earth.rotation.y = timePassed * 2e-4
    this.three.satellites.forEach(satellite => {
      satellite.userData.sprite.position.setFromSpherical({
        radius: 1.32,
        theta: satellite.userData.speed * timePassed * 6e-4,
        phi: Math.PI / 2,
      })
    })
  }
}

SatelliteVisualization.propTypes = {
  /**
   * The satellites to be displayed.
   */
  satellites: arrayOf(
    shape({
      angleOfFlight: number.isRequired,
      id: string.isRequired,
      isHighlit: bool,
      initialLatitude: number.isRequired,
      initialLongitude: number.isRequired,
      name: string.isRequired,
      type: any.isRequired,
    }),
  ).isRequired,
}

export default SatelliteVisualization
