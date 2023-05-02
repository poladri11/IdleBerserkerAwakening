const { createApp } = Vue;

createApp({
    mounted() {
        this.getTier()
    },
    data() {
        return {
            tier: "B",
            nextTier: "",
            active: "active",
            maxAbil: 0,
            minAbil: 0,
            currentAtt: {
                value: 0,
                shardsLeft: 0
            },
            currentSkill: {
                value: 0,
                shardsLeft: 0
            },
            currentBoss: {
                value: 0,
                shardsLeft: 0
            },
            currentBerserkAtt: {
                value: 0,
                shardsLeft: 0,
            },
            currentHealth: {
                value: 0,
                shardsLeft: 0
            },
            currentBerserkCrit: {
                value: 0,
                shardsLeft: 0
            },
            shardsPerkill: {
                value: 0,
                shardsLeft: 0
            },
            tiers: [
                {
                    tier: "B",
                    maxAbil: 50,
                    minAbil: 0
                },
                {
                    tier: "A",
                    maxAbil: 120,
                    minAbil: 50
                },
                {
                    tier: "S",
                    maxAbil: 220,
                    minAbil: 120
                },
                {
                    tier: "SR",
                    maxAbil: 500,
                    minAbil: 220
                }
            ],
            totalShards: 0,
            
        }
    },
    methods: {
       getTier() {
        
        Object.keys(this.tiers).forEach((index) => {
            if(this.tiers[index].tier === this.tier) {
                this.maxAbil = this.tiers[index].maxAbil
                this.minAbil = this.tiers[index].minAbil 

            }
        })
       },
       getShards(tier) {
            if(tier.value > this.maxAbil) { return }
            tier.shardsLeft = ( ( ( this.maxAbil * (this.maxAbil+1) ) / 2 ) - ( ( (tier.value+1) * tier.value) / 2) ) * 100
            this.sumShards();
       },
       sumShards() {
        this.totalShards = this.currentAtt.shardsLeft +  this.currentSkill.shardsLeft +  this.currentBoss.shardsLeft +  this.currentBerserkAtt.shardsLeft +  this.currentHealth.shardsLeft +  this.currentBerserkCrit.shardsLeft; 
       }
    }
}).mount("#app");