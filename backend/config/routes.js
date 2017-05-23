const express = require('express');

module.exports = function(server){


  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas api
  const billingCycleService = require('../api/billingCycle/billingCycleService');
  billingCycleService.register(router, '/billingCycles');
}
