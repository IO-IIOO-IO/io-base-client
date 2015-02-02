_sid = null unless _sid?
_fn = null
_api = null

exports.ready = ready = (fn) ->
  if typeof fn is 'function'
    _fn = fn
    _fn _api if _api?
  else
    _api = fn
    _fn _api if _fn?

inject = require 'reconnect-core'
shoe = require 'shoe'

muxDemux = require 'oc-mux-demux'
s = muxDemux()

dnode = require 'dnode'
d = dnode()
d.on 'remote', (remote) ->
  remote.auth _sid, (api) ->
    api.ss = s
    ready api

reconnect = inject (args...) ->
  shoe args...

reconnect (stream) ->
  d.pipe s.createStream 'dnode'
  .pipe d
.connect 'https://io.iioo.io/engine'
