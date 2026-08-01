const demo = {
  "vin": "LC0C74C44R5338215", // 车辆唯一识别码
  "realtime": {
    "powerSystem": 0, // 动力系统故障状态 0=无故障
    "rightRearTirepressure": 247, // 右后轮胎压 kPa
    "chargeState": 15, // 充电状态原始编码（第三方协议自定义，15=未充电）
    "evEndurance": 16, // 纯电续航里程 km
    "diffOilColor": 0, // 差速器油状态 0正常
    "rightFrontTireStatus": 0, // 右前轮胎故障 0正常
    "onlineStatus": 1, // 车辆在线状态 1在线，0离线
    "elecPercent": 31, // 动力电池剩余电量 %
    "chargeCostHour": 0, // 预约充电-小时数（当前无效）
    "rightFrontTirepressure": 247, // 右前轮胎压 kPa
    "bladeBatteryCoolant": 0, // 刀片电池冷却系统状态 0正常
    "engineStatus": 0, // 发动机状态 0=熄火停机，1=启动运转
    "epb": -1, // EPB电子手刹故障码 -1=无故障
    "rapidTireLeak": -1, // 轮胎快速漏气告警 -1=无泄漏
    "motorCoolantPercent": 0, // 电机冷却液液位状态 0正常
    "oilPressureSystem": 0, // 机油压力系统 0正常
    "rearTransOilPercent": 0, // 后减速器油液位 0正常
    "eps": 0, // 电动助力转向系统 0无故障
    "chargingState": -1, // 充电通用状态 -1不在充电
    "flashCharge": 0, // 快充激活状态 0未快充
    "totalConsumptionEn": "7.3kW·h/100km", // 百公里电耗（带单位）
    "dripCharge": 0, // 涓流充电 0关闭
    "genTransOilPercent": 0, // 发电机变速箱油状态 0正常
    "leftFrontDoorLock": 2, // 左前门锁状态 2=上锁，0=解锁
    "diffOilPercent": 0, // 差速器油液位 0正常
    "totalPower": 0.0, // 当前充放电功率 kW，0=无功率交互
    "shockOilColor": 0, // 减震油状态 0正常
    "longLifeCoolantColor": 0, // 长效冷却液状态 0正常
    "fullHour": -1, // 充满剩余小时 -1无充电任务
    "smallUiSmartChargeTips": "未预约", // 预约充电文字提示
    "enduranceMileage": 16, // 纯电续航（同evEndurance，重复字段）
    "trunkLid": 0, // 后备箱盖 0关闭，1开启
    "pwr": 2, // 整车电源档位：2=OFF熄火；1=ON上电；0=ACC
    "leftFrontTireStatus": 0, // 左前轮故障状态 0正常
    "okLight": 0, // 仪表盘OK指示灯 0不点亮
    "leftRearTireStatus": 0, // 左后轮故障状态 0正常
    "oilEndurance": 187, // 燃油剩余续航 km
    "rightRearDoor": 0, // 右后门 0关闭，1开启
    "tirepressureSystem": 0, // 胎压监测系统TPMS 0正常
    "hevMileage": 12724, // HEV混动模式行驶里程 km
    "leftRearWindow": 1, // 左后车窗 1打开，0关闭
    "leftFrontTirepressure": 250, // 左前轮胎压 kPa
    "energyConsumption": "11.9", // 综合能耗标识值（协议内部参数）
    "rightRearTireStatus": 0, // 右后轮故障状态 0正常
    "planType": 0, // 车辆方案类型 0默认
    "leftRearTirepressure": 245, // 左后轮胎压 kPa
    "signalStrength": 0, // 4G信号强度（该数据源未返回有效值，恒0）
    "skylight": 1, // 天窗状态 1开启，0关闭
    "shockOilPercent": 0, // 减震油液位 0正常
    "powerGear": 1, // 虚拟档位：0=P，1=D，2=R，3=N；熄火下数据存在缓存不准
    "svs": -1, // SVS发动机故障灯 -1无故障
    "abs": 0, // ABS防抱死系统 0正常
    "chargeCostMinute": 0, // 预约充电分钟（无效）
    "rearTransOilColor": 0, // 后减速器油品质 0正常
    "chargingPower": "0", // 当前充电功率kW，0=未充电
    "esp": 0, // ESP车身稳定系统 0正常
    "remainingMinutes": -1, // 充满剩余分钟 -1未充电
    "rightFrontDoor": 0, // 右前门 0关闭，1开启
    "fullMinute": -1, // 充满分钟数 -1无任务
    "totalMileage": 28454, // 车辆总里程 km
    "powerBattery": 0, // 动力电池系统故障 0正常
    "rightFrontDoorLock": 2, // 右前门锁 2上锁
    "transmission": 0, // 变速箱系统 0正常
    "ect": 0, // 发动机冷却液温度系统 0正常
    "totalConsumption": "7.3度/百公里", // 百公里电耗中文单位
    "bookingChargingMinute": 53, // 预约充电：分钟 07:53
    "vehicleState": 2, // 整车状态 2=下电熄火；1=上电就绪；0=ACC
    "chargeGunConnectStatusRaw": 0, // 充电枪连接状态 0未插枪
    "chargingSystem": 0, // 车载充电机系统 0正常
    "connectState": -1, // 充电连接状态 -1未连接充电桩
    "engineOilColor": 0, // 发动机机油品质 0正常
    "forehold": 0, // 陡坡缓降/驻车保持 0关闭
    "heatStatus": "null", // 电池热管理状态，空=未工作
    "chargeFaultStatus": 0, // 充电故障 0无故障
    "bookingChargingHour": 7, // 预约充电：小时 7点
    "totalOil": 0.0, // 燃油总量（该接口不输出真实油量，无意义）
    "oilPercent": 11, // 油箱剩余燃油百分比 %
    "bladeBatteryCoolantColor": 0, // 电池冷却液品质 0正常
    "genTransOilColor": 0, // 发电机变速箱油品质 0正常
    "ectValue": -1, // 发动机水温数值 -1熄火无数据
    "leftFrontWindow": 1, // 左前车窗 1打开
    "remainingHours": -1, // 充满剩余小时 -1未充电
    "streamingMediaMirror": 0, // 流媒体后视镜开关 0关闭
    "leftRearDoor": 0, // 左后门 0关闭
    "speed": 0, // 当前车速 km/h
    "rate": -999, // 瞬时能耗速率，无有效数据填充-999
    "brakeFluid": 0, // 制动液液位系统 0正常
    "rightRearDoorLock": 2, // 右后门锁 2上锁
    "leftRearDoorLock": 2, // 左后门锁 2上锁
    "longLifeCoolant": 0, // 长效冷却液液位 0正常
    "brakingSystem": 0, // 制动总系统 0正常
    "rightFrontWindow": 1, // 右前车窗 1打开
    "motorCoolantColor": 0, // 电机冷却液品质 0正常
    "ins": -1, // INS仪表故障告警 -1无故障
    "rightRearWindow": 1, // 右后车窗 1打开
    "transmissionColor": 0, // 变速箱油品质 0正常
    "powerBatteryConnection": -1, // 动力电池连接告警 -1正常
    "brakeFluidColor": 0, // 制动液品质 0正常
    "srs": 0, // 安全气囊SRS系统 0正常
    "batteryPrepare": 0, // 电池预热/预制冷准备 0未启动
    "time": 1785545119, // 报文时间戳 秒级Unix时间
    "leftFrontDoor": 0, // 左前门 0关闭
    "steeringSystem": 0, // 转向系统 0正常
    "engineOil": 0, // 发动机机油液位系统 0正常
    "bookingChargeState": 0 // 预约充电启用状态：0关闭预约，1开启预约
  }
}