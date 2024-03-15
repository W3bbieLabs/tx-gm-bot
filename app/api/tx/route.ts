import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameMessage, FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { base } from 'viem/chains';
import { encodeFunctionData, parseEther } from 'viem';
//import BuyMeACoffeeABI from "../../utils/BuyMeACoffeeABI"
import { Zora1155ABI } from "../../utils/Zora1155"
import { GM_CONTRACT, Referral } from '../../config'
//import { toBytes } from 'viem'

let validateParam = (param: string, request: Request) => {
    const { searchParams } = new URL(request.url);
    const hasParam = searchParams.has(param);
    const _param: string = hasParam ? (searchParams.get(param)?.slice(0, 100) as string) : '';
    return _param;
};

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
    const body: FrameRequest = await req.json();
    const address: `0x${string}` = validateParam('address', req) as `0x${string}`
    const { isValid } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid) {
        return new NextResponse('Message not valid', { status: 500 });
    }

    //const mintTo = toBytes(address)

    const data = encodeFunctionData({
        abi: Zora1155ABI,
        functionName: 'mintWithRewards',
        args: [GM_CONTRACT, parseEther('1'), parseEther('1'), address, Referral],
    });

    const txData: FrameTransactionResponse = {
        chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
        method: 'eth_sendTransaction',
        params: {
            abi: [],
            data,
            to: GM_CONTRACT,
            value: parseEther('0').toString(), // 0.00004 ETH
        },
    };

    return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';