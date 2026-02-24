const { User, sequelize } = require('./models');
const { comparePassword } = require('./utils/auth');

async function testCredentials() {
    try {
        await sequelize.authenticate();
        const email = process.env.ADMIN_EMAIL || 'admin@geraetewelt.com';
        const password = process.env.ADMIN_PASSWORD || 'admin123';
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log(`Error: User ${email} not found in DB`);
            process.exit(1);
        }

        const isMatch = await comparePassword(password, user.passwordHash);
        console.log(`User: ${user.email}`);
        console.log(`Password match: ${isMatch}`);
        console.log(`Role: ${user.role}`);

        process.exit(isMatch ? 0 : 1);
    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

testCredentials();
